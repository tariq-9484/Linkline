import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'security-products',
    name: 'Security Products',
    description: 'Comprehensive security solutions for monitoring and safety.',
    image: '/assets/security-products.jpg',
    subCategories: [
      {
        id: 'cctv-cameras',
        name: 'CCTV Cameras',
        description: 'High-quality surveillance cameras and DVR systems for all environments.',
        image: '/assets/CCTV-Cameras-scaled-1.jpg',
        parentCategory: 'security-products',
      },
      {
        id: 'searching-equipment',
        name: 'Searching Equipment',
        description: 'Professional-grade searching and detection tools.',
        image: '/assets/Searching-Equipment-scaled-1.jpg',
        parentCategory: 'security-products',
      },
      {
        id: 'safety-devices',
        name: 'Safety Devices',
        description: 'Devices ensuring safety and secure access.',
        image: '/assets/Safety-Devices-scaled-1.jpg',
        parentCategory: 'security-products',
      },
    ],
  },
  {
    id: 'walkie-talkie-accessories',
    name: 'Walkie Talkie Accessories',
    description: 'Premium accessories for professional communication.',
    image: '/assets/walkietalkie.jpeg',
    subCategories: [
      {
        id: 'icom',
        name: 'ICOM ',
        description: 'High-quality accessories for ICOM devices.',
        image: '/assets/ICOM-Accessories.jpg',
        parentCategory: 'walkie-talkie-accessories',
      },
      {
        id: 'baofeng',
        name: 'BAOFENG ',
        description: 'Durable accessories for BAOFENG devices.',
        image: '/assets/BAOFENG.jpg',
        parentCategory: 'walkie-talkie-accessories',
      },
      {
        id: 'hytera',
        name: 'Hytera ',
        description: 'Reliable accessories for Hytera devices.',
        image: '/assets/Hytera-Accessories.jpg',
        parentCategory: 'walkie-talkie-accessories',
      },
      {
        id: 'kenwood',
        name: 'Kenwood',
        description: 'Versatile accessories for Kenwood devices.',
        image: '/assets/Kenwood.jpg',
        parentCategory: 'walkie-talkie-accessories',
      },
      {
        id: 'motorola',
        name: 'MOTOROLA',
        description: 'Robust accessories for Motorola devices.',
        image: '/assets/Motorola.jpg',
        parentCategory: 'walkie-talkie-accessories',
      },
    ],
  },
  {
    id: 'other-products',
    name: 'Other Products',
    description: 'A diverse range of additional tools and devices.',
    image: '/assets/other-products.jpg',
    subCategories: [
      {
        id: 'phone-sets',
        name: 'Phone Sets',
        description: 'Cordless and Caller ID phones for businesses and homes.',
        image: '/assets/phone set.jpeg',
        parentCategory: 'other-products',
      },
      {
        id: 'lights-and-batons',
        name: 'Lights and Batons',
        description: 'Search lights and batons for visibility and safety.',
        image: '/assets/Police-Baton-1024x1024-1.jpg',
        parentCategory: 'other-products',
      },
      {
        id: 'routers',
        name: 'Routers',
        description: 'High-performance Wi-Fi routers.',
        image: '/assets/Wi-Fi-Router-1024x1024-1.jpg',
        parentCategory: 'other-products',
      },
      {
        id: 'money-counting-machines',
        name: 'Machines',
        description: 'Efficient machines for counting and detecting counterfeit money.',
        image: '/assets/Money-Counting-Machine-1024x1024-1.jpg',
        parentCategory: 'other-products',
      },
      {
        id: 'speedhumps',
        name: 'Speed Humps',
        description: 'Raised road features designed to slow down vehicles and enhance safety.',
        image: '/assets/Rubber Speedhump.jpeg',
        parentCategory: 'other-products',
      },
      {
        id: 'others',
        name: 'Additional Products ',
        description: 'Many additional products .',
        image: '/assets/aaaa.webp',
        parentCategory: 'other-products',
      }
    ],
  },
];