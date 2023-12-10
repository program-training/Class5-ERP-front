import { adminProductInterface } from "../interfaces/adminProductInterface";

export default (product: adminProductInterface) => {
    return {
        ...product,
        salePrice: +product.salePrice,
        quantity: +product.quantity,
        discountPercentage: +product.discountPercentage,
        isForSale: `${product.isForSale}` === 'true',
        costPrice: +product.costPrice
    }
}