import { productData } from "../../models/productData";

export const produtsList: productData[] = [
  {
    id: 1,
    name: "Sweater Le pull Neve Fluffy long sleeve knit.",
    price: 2000000,
    priceWithDiscount: 1200000,
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    images: ["sweater1.png", "sweater2.png", "sweater3.png", "sweater4.png"],
    description:
      "Saco de punto de manga larga con materiales eco amigables en 4 tonos. Esta sudadera con capucha clásica está confeccionada con algodón 100 % orgánico y está diseñada para usarse durante todo el año, en todas las temporadas. es un tejido de peso medio con una textura loopback en el interior y un acabado que aporta suavidad extra. se trata con aceite de menta natural (pprmint™), para reducir la necesidad de lavado y mantenerlo fresco por más tiempo.",
  },
];

export const alsoLike: productData[] = [
  {
    id: 1,
    name: "Maroon Sweater square La robe Bari",
    price: 760000,
    images: [],
  },
  {
    id: 2,
    name: "Orange vest sweater La veste Baska",
    price: 1280000,
    images: [],
  },
  {
    id: 3,
    name: "Dress Le pull Neve Fluffy long sleeve knit.",
    price: 980000,
    images: [],
  },
  {
    id: 4,
    name: "Sweater Le pull Neve Fluffy long sleeve knit",
    price: 200000,
    images: [],
  },
  {
    id: 5,
    name: "Le sac Rond",
    price: 825000,
    images: [],
  },
];
