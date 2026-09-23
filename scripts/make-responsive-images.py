"""Generate downsized copies of large photos in public/ for srcset.

Writes <name>-<width>.<ext> next to each original. Keep WIDTHS in sync with
src/lib/responsiveImages.ts. Re-run after adding or replacing a photo:

    python scripts/make-responsive-images.py
"""
from pathlib import Path

from PIL import Image

PUBLIC = Path(__file__).resolve().parent.parent / 'public'

WIDTHS = {
    # tire cards: 280px wide -> 2x / 3x screens
    'IMG-20260921-WA0021.jpg': [600, 900, 1200],   # also the full-width tire banner
    'IMG-20260923-WA0016.jpg': [600, 900],
    'IMG-20260923-WA0015.jpg': [600, 900],
    'IMG-20260923-WA0019.jpg': [600, 900],
    'IMG-20260923-WA0018.jpg': [600, 900],
    'IMG-20260923-WA0040.jpg': [600, 900],
    'IMG-20260923-WA0013(1).jpg': [600, 900],
    # "Why Njomane" photo panel: ~340-600px wide
    'IMG-20260921-WA0033.jpg': [800, 1200],
    # hero slide 3 (the only large hero image)
    'mechanic3.webp': [1200],
    'mechanic3.avif': [1200],
}

for name, widths in WIDTHS.items():
    src = PUBLIC / name
    im = Image.open(src)
    for w in widths:
        if w >= im.width:
            continue
        out = src.with_name(f'{src.stem}-{w}{src.suffix}')
        resized = im.convert('RGB').resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        if src.suffix == '.jpg':
            resized.save(out, quality=80, optimize=True, progressive=True)
        elif src.suffix == '.webp':
            resized.save(out, quality=80)
        else:
            resized.save(out, quality=60)
        print(f'{out.name}: {out.stat().st_size // 1024} KB')
