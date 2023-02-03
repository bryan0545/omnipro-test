export type sizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

export interface productData {
  id: number;
  name: string;
  price: number;
  priceWithDiscount?: number;
  sizes: sizes[];
  images: string[];
  description?: string;
}
