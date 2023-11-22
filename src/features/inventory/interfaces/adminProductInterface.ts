export interface adminProductInterface {
  id: string;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  imageUrl: string;
  imageAlt: string;
  isForSale: boolean;
  costPrice: number;
  supplier: string;
}
