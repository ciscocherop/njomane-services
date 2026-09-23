// Service data for Njomane Services LLC
// Each entry maps to a ServiceCard on the Services section

export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'engine',
    icon: 'Gauge',
    title: 'Engine Diagnostics & Repair',
    description:
      'Comprehensive engine diagnostics and repair for trucks and trailers. We identify issues fast and get your engine running right.',
  },
  {
    id: 'brakes',
    icon: 'CircleDot',
    title: 'Brake Service & Repair',
    description:
      'Inspection, adjustment, and repair of brake systems to keep your vehicle stopping safely on every haul.',
  },
  {
    id: 'transmission',
    icon: 'Settings2',
    title: 'Transmission Service & Repair',
    description:
      'Transmission diagnostics and repair for commercial trucks and trailers, keeping your drivetrain in working order.',
  },
  {
    id: 'tires',
    icon: 'Circle',
    title: 'Tire Change & Repair',
    description:
      'Flat tire repair, tire changes, and tire services for trucks and trailers — on-site when you need it.',
  },
  {
    id: 'electrical',
    icon: 'Zap',
    title: 'Electrical System Diagnostics & Repair',
    description:
      'Diagnosis and repair of electrical faults including wiring, lighting, sensors, and chassis electronics on commercial trucks and trailers.',
  },
  {
    id: 'cooling',
    icon: 'Thermometer',
    title: 'Cooling System Service & Repair',
    description:
      'Radiator, coolant, hose, and cooling system inspection and repair to prevent overheating on the road.',
  },
  {
    id: 'suspension',
    icon: 'ArrowUpDown',
    title: 'Suspension & Air System Repair',
    description:
      'Suspension inspection and repair, including air bags and air ride systems for commercial trucks and trailers.',
  },
  {
    id: 'maintenance',
    icon: 'ClipboardList',
    title: 'Preventive Maintenance & More',
    description:
      'Scheduled maintenance services to keep your fleet in top condition and reduce unexpected breakdowns. Ask us about additional services not listed here.',
  },
  {
    id: 'roadside',
    icon: 'MapPin',
    title: 'Roadside / On-Site Service',
    description:
      'Mobile mechanic service that comes to you. Whether you are on the side of the road or at a yard, we respond.',
  },
];
