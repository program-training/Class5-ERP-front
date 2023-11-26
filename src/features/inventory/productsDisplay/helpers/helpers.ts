import { adminProductInterface } from "../../interfaces/adminProductInterface";

export const getProductsDetails = (products: adminProductInterface[]) => {
  const categories: string[] = [];
  let sumCategories = 0;
  let sumProducts = 0;
  let sumLowInStock = 0;
  let sumOutOfStock = 0;

  if (products)
    for (let index = 0; index < products.length; index++) {
      sumProducts++;
      const product = products[index];
      if (!categories.includes(product.category)) {
        categories.push(product.category);
        sumCategories++;
      }
      if (product.quantity < 5) sumLowInStock++;
      if (product.quantity === 0) sumOutOfStock++;
    }

  return { sumCategories, sumProducts, sumLowInStock, sumOutOfStock };
};
