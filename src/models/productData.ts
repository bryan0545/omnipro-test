export interface productData {
  id: number;
  name: string;
  price: number;
  priceWithDiscount?: number;
  sizes?: string[];
  images: string[];
  description?: string;
}
