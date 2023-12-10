export interface adminProductInterface {
  id: number;
  name: string;
  salePrice: string;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  imageUrl: string;
  imageAlt: string;
  isForSale: boolean;
  costPrice: string;
  supplier: string;
  createdBy: string;
}
