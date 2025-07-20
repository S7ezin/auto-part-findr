export interface SparePart {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  compatibleCars: string[];
  imageUrl: string;
  inStock: boolean;
}

export const categories = [
  'Engine',
  'Filters',
  'Brakes',
  'Suspension',
  'Electrical',
  'Transmission',
  'Exhaust',
  'Body Parts'
];

export const spareParts: SparePart[] = [
  {
    id: '1',
    name: 'Bosch Oil Filter',
    description: 'Efficient oil filtering for extended engine life. Premium quality filter with advanced filtration technology.',
    price: 24.99,
    category: 'Filters',
    compatibleCars: ['Toyota Corolla', 'Honda Civic', 'Nissan Sentra'],
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
    inStock: true
  },
  {
    id: '2',
    name: 'Brembo Brake Pad Set',
    description: 'High-performance brake pads for safety and control. Superior stopping power and durability.',
    price: 89.99,
    category: 'Brakes',
    compatibleCars: ['Hyundai i20', 'Suzuki Swift', 'Ford Fiesta'],
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    inStock: true
  },
  {
    id: '3',
    name: 'NGK Spark Plug Set',
    description: 'Premium iridium spark plugs for optimal engine performance and fuel efficiency.',
    price: 45.50,
    category: 'Engine',
    compatibleCars: ['BMW 3 Series', 'Audi A4', 'Mercedes C-Class'],
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400',
    inStock: true
  },
  {
    id: '4',
    name: 'Bilstein Shock Absorber',
    description: 'Gas-pressure monotube shock absorber for superior handling and comfort.',
    price: 156.00,
    category: 'Suspension',
    compatibleCars: ['Volkswagen Golf', 'Skoda Octavia', 'Seat Leon'],
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400',
    inStock: false
  },
  {
    id: '5',
    name: 'Denso Alternator',
    description: 'High-output alternator for reliable electrical power generation. Built for durability.',
    price: 289.99,
    category: 'Electrical',
    compatibleCars: ['Toyota Camry', 'Honda Accord', 'Mazda6'],
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    inStock: true
  },
  {
    id: '6',
    name: 'K&N Air Filter',
    description: 'High-flow air filter for increased horsepower and acceleration. Washable and reusable.',
    price: 67.75,
    category: 'Filters',
    compatibleCars: ['Ford Mustang', 'Chevrolet Camaro', 'Dodge Challenger'],
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
    inStock: true
  },
  {
    id: '7',
    name: 'Mobil 1 Transmission Fluid',
    description: 'Synthetic transmission fluid for smooth shifting and extended transmission life.',
    price: 34.20,
    category: 'Transmission',
    compatibleCars: ['Ford F-150', 'Ram 1500', 'Silverado'],
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
    inStock: true
  },
  {
    id: '8',
    name: 'Borla Exhaust System',
    description: 'Performance exhaust system for enhanced power and aggressive sound.',
    price: 445.00,
    category: 'Exhaust',
    compatibleCars: ['Subaru WRX', 'Mitsubishi Lancer', 'Honda Civic Type R'],
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=400',
    inStock: true
  }
];