export type sizes = "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

export interface smallProductData {
  id: number;
  name: string;
  price: number;
  images: string[];
}

export interface productData extends smallProductData {
  priceWithDiscount?: number;
  sizes: sizes[];
  description?: string;
}
