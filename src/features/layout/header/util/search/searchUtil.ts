import { adminProductInterface } from "../../../../inventory/interfaces/adminProductInterface";

export const searchUtil = (
  allProducts: adminProductInterface[],
  value: string
): adminProductInterface[] => {
  if (typeof value !== "string" || !Array.isArray(allProducts)) return [];
  for (let i = 0; i < allProducts.length; i++) {
    if (
      Array.isArray(allProducts[i]) ||
      typeof allProducts[i] !== "object" ||
      !(
        "name" in allProducts[i] &&
        "category" in allProducts[i] &&
        "createdBy" in allProducts[i] &&
        "supplier" in allProducts[i]
      )
    )
      return [];
  }
  const helper: adminProductInterface[] = [];
  allProducts.forEach((product) => {
    if (
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase()) ||
      product.createdBy.toLowerCase().includes(value.toLowerCase()) ||
      product.supplier.toLowerCase().includes(value.toLowerCase())
    )
      helper.push(product);
  });
  return helper;
};
