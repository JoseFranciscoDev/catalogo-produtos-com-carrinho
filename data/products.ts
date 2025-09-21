import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Saco de cimento 50kg",
    description:
      "High-quality Portland cement perfect for construction projects. Excellent strength and durability.",
    price: 12.5,
    image:
      "https://cdn.awsli.com.br/2500x2500/1606/1606237/produto/60689468/1151ee43-0f50-41fe-9ad8-5724b2840597-(2)-479c74984f.jpg",
    category: "Cimento e Concreto",
    inStock: true,
    unit: "saco",
  },
  {
    id: "2",
    name: "Vergalhão de aço 12mm",
    description:
      "Premium grade steel reinforcement bars for concrete structures. High tensile strength.",
    price: 8.75,
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    category: "Aço e Metais",
    inStock: true,
    unit: "unidade",
  },
  {
    id: "3",
    name: "Piso cerâmico 60x60cm",
    description:
      "Elegant ceramic tiles with anti-slip surface. Perfect for residential and commercial use.",
    price: 25.0,
    image: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg",
    category: "Revestimentos e Pisos",
    inStock: true,
    unit: "m²",
  },
  {
    id: "4",
    name: "Tinta premium branca 18L",
    description:
      "High-coverage interior/exterior paint with excellent finish and durability.",
    price: 45.0,
    image: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg",
    category: "Tintas e Revestimentos",
    inStock: true,
    unit: "balde",
  },
  {
    id: "5",
    name: "Tábuas de pinus 2x4x8ft",
    description:
      "Quality pine lumber for framing and construction. Kiln-dried and ready to use.",
    price: 18.5,
    image: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg",
    category: "Madeira",
    inStock: true,
    unit: "unidade",
  },
  {
    id: "6",
    name: "Tubo de PVC 4 polegadas",
    description:
      "High-quality PVC pipes for drainage and plumbing systems. 6-meter length.",
    price: 15.25,
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    category: "Hidráulica",
    inStock: true,
    unit: "unidade",
  },
  {
    id: "7",
    name: "Tijolos de barro",
    description:
      "Traditional red clay bricks for construction. High compressive strength and weather resistant.",
    price: 0.35,
    image: "https://images.pexels.com/photos/934718/pexels-photo-934718.jpeg",
    category: "Tijolos e Blocos",
    inStock: true,
    unit: "unidade",
  },
  {
    id: "8",
    name: "Fio elétrico 2.5mm",
    description:
      "Copper electrical wire for residential and commercial wiring. 100-meter roll.",
    price: 65.0,
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    category: "Elétrica",
    inStock: false,
    unit: "rolo",
  },
  {
    id: "9",
    name: "Bloco de concreto 20x20x40cm",
    description:
      "Lightweight concrete blocks for construction. Excellent insulation properties.",
    price: 2.8,
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    category: "Tijolos e Blocos",
    inStock: true,
    unit: "unidade",
  },
  {
    id: "10",
    name: "Telha galvanizada ondulada",
    description:
      "Corrugated galvanized steel roofing sheets. Weather resistant and durable.",
    price: 28.0,
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    category: "Coberturas",
    inStock: true,
    unit: "unidade",
  },
  {
    id: "11",
    name: "Azulejo para banheiro - Mármore",
    description:
      "Luxury marble-look ceramic tiles perfect for bathrooms and kitchens.",
    price: 35.5,
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
    category: "Revestimentos e Pisos",
    inStock: true,
    unit: "m²",
  },
  {
    id: "12",
    name: "Areia fina para construção",
    description:
      "Clean, fine construction sand perfect for concrete mixing and masonry work.",
    price: 22.0,
    image: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg",
    category: "Areia e Brita",
    inStock: true,
    unit: "tonelada",
  },
];

export const categories = [
  "Todas as Categorias",
  "Cimento e Concreto",
  "Aço e Metais",
  "Revestimentos e Pisos",
  "Tintas e Revestimentos",
  "Madeira",
  "Hidráulica",
  "Tijolos e Blocos",
  "Elétrica",
  "Coberturas",
  "Areia e Brita",
];
