export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Dresses' | 'Tops' | 'Bottoms' | 'Accessories' | 'Shoes' | 'Outerwear';
  sizes: string[];
  colors: string[];
  image: string;
  hoverImage: string;
  isNew: boolean;
  rating: number;
  description: string;
}

export const categories = [
  'All',
  'Dresses',
  'Tops',
  'Bottoms',
  'Accessories',
  'Shoes',
  'Outerwear',
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Adire Wrap Dress',
    price: 45000,
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Indigo', 'White', 'Rust'],
    image: 'https://picsum.photos/seed/nuvora1/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora1b/800/600',
    isNew: true,
    rating: 4.8,
    description:
      'Hand-dyed adire wrap dress crafted from premium Nigerian cotton. The rich indigo pattern is achieved through traditional resist-dyeing techniques passed down through generations.',
  },
  {
    id: 2,
    name: 'Ankara Bomber Jacket',
    price: 62000,
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Multi', 'Earth Tones'],
    image: 'https://picsum.photos/seed/nuvora2/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora2b/800/600',
    isNew: true,
    rating: 4.9,
    description:
      'Structured bomber jacket featuring bold Ankara print. Lined with breathable cotton for year-round comfort. A statement piece that bridges tradition and street style.',
  },
  {
    id: 3,
    name: 'Aso Oke Wide-Leg Trousers',
    price: 38000,
    category: 'Bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Gold', 'Ivory', 'Black'],
    image: 'https://picsum.photos/seed/nuvora3/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora3b/800/600',
    isNew: false,
    rating: 4.6,
    description:
      'Flowing wide-leg trousers woven in traditional Aso Oke fabric. High-waisted fit with a relaxed silhouette, perfect for day-to-night dressing.',
  },
  {
    id: 4,
    name: 'Cowrie Shell Choker',
    price: 15000,
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['Natural', 'Gold'],
    image: 'https://picsum.photos/seed/nuvora4/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora4b/800/600',
    isNew: false,
    rating: 4.7,
    description:
      'Handcrafted cowrie shell choker on a braided gold cord. A nod to West African heritage, each shell is individually selected and polished.',
  },
  {
    id: 5,
    name: 'Batik Silk Blouse',
    price: 32000,
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Teal', 'Burgundy', 'Cream'],
    image: 'https://picsum.photos/seed/nuvora5/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora5b/800/600',
    isNew: true,
    rating: 4.5,
    description:
      'Luxurious silk blouse with hand-applied batik patterns. Relaxed fit with bell sleeves. Each piece is unique due to the hand-dyeing process.',
  },
  {
    id: 6,
    name: 'Leather Woven Mules',
    price: 28000,
    category: 'Shoes',
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Tan', 'Black', 'Olive'],
    image: 'https://picsum.photos/seed/nuvora6/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora6b/800/600',
    isNew: false,
    rating: 4.4,
    description:
      'Artisan-crafted leather mules with intricate woven detail. Cushioned insole for all-day comfort. Handmade by leather workers in Kano.',
  },
  {
    id: 7,
    name: 'Agbada Kaftan Dress',
    price: 78000,
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White/Gold', 'Black/Silver', 'Royal Blue'],
    image: 'https://picsum.photos/seed/nuvora7/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora7b/800/600',
    isNew: true,
    rating: 5.0,
    description:
      'Regal Agbada-inspired kaftan dress with hand-embroidered metallic thread detailing. Perfect for special occasions and cultural events.',
  },
  {
    id: 8,
    name: 'Kente Crossbody Bag',
    price: 22000,
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['Multi', 'Black/Gold'],
    image: 'https://picsum.photos/seed/nuvora8/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora8b/800/600',
    isNew: false,
    rating: 4.6,
    description:
      'Structured crossbody bag featuring authentic Kente cloth panels with leather trim. Adjustable strap and interior pockets for everyday functionality.',
  },
  {
    id: 9,
    name: 'Mudcloth Crop Top',
    price: 18000,
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Earth', 'Black/White'],
    image: 'https://picsum.photos/seed/nuvora9/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora9b/800/600',
    isNew: false,
    rating: 4.3,
    description:
      'Cropped top in authentic Malian mudcloth. The geometric patterns are hand-painted using fermented mud — an art form dating back centuries.',
  },
  {
    id: 10,
    name: 'Palazzo Ankara Pants',
    price: 35000,
    category: 'Bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Sunset', 'Forest', 'Ocean'],
    image: 'https://picsum.photos/seed/nuvora10/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora10b/800/600',
    isNew: true,
    rating: 4.7,
    description:
      'Ultra-wide palazzo pants in vibrant Ankara cotton. Elastic waistband, deep pockets, and a dramatic silhouette. Pairs beautifully with a simple top.',
  },
  {
    id: 11,
    name: 'Beaded Gladiator Sandals',
    price: 25000,
    category: 'Shoes',
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Masai Red', 'Turquoise', 'Gold'],
    image: 'https://picsum.photos/seed/nuvora11/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora11b/800/600',
    isNew: false,
    rating: 4.5,
    description:
      'Hand-beaded gladiator sandals inspired by East African Masai craftsmanship. Genuine leather straps with intricate seed bead work.',
  },
  {
    id: 12,
    name: 'Dashiki Peplum Top',
    price: 24000,
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Yellow', 'Green', 'Blue'],
    image: 'https://picsum.photos/seed/nuvora12/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora12b/800/600',
    isNew: false,
    rating: 4.4,
    description:
      'Modern peplum top with traditional Dashiki embroidery around the neckline. Fitted bodice with a flared peplum for a flattering silhouette.',
  },
  {
    id: 13,
    name: 'Denim Ankara Trench',
    price: 72000,
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Denim/Print', 'Black/Print'],
    image: 'https://picsum.photos/seed/nuvora13/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora13b/800/600',
    isNew: true,
    rating: 4.8,
    description:
      'Premium denim trench coat with Ankara-print lining that peeks through when the cuffs are rolled. Belt-tied waist for a structured look.',
  },
  {
    id: 14,
    name: 'Silk Headwrap Set',
    price: 12000,
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['Jewel Tones', 'Neutrals', 'Pastels'],
    image: 'https://picsum.photos/seed/nuvora14/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora14b/800/600',
    isNew: false,
    rating: 4.9,
    description:
      'Set of three satin-lined silk headwraps in complementary prints. Protects hair while making a bold style statement. Pre-shaped for easy tying.',
  },
  {
    id: 15,
    name: 'Maxi Skirt Aso Oke',
    price: 42000,
    category: 'Bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Champagne', 'Silver', 'Bronze'],
    image: 'https://picsum.photos/seed/nuvora15/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora15b/800/600',
    isNew: false,
    rating: 4.6,
    description:
      'Floor-length Aso Oke maxi skirt with a fitted waist and flowing hem. Hand-woven by master weavers using traditional looms.',
  },
  {
    id: 16,
    name: 'Embroidered Babouche Slippers',
    price: 19000,
    category: 'Shoes',
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: ['Gold', 'Black', 'Rose'],
    image: 'https://picsum.photos/seed/nuvora16/800/600',
    hoverImage: 'https://picsum.photos/seed/nuvora16b/800/600',
    isNew: true,
    rating: 4.7,
    description:
      'Traditional babouche slippers reimagined with contemporary embroidery. Soft leather with a cushioned sole. Handmade in Marrakech.',
  },
];
