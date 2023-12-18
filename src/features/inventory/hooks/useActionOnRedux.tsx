import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { adminProductInterface } from "../interfaces/adminProductInterface";
import {
  setAllProducts,
  setChosenProduct,
  setFilteredProducts,
} from "../productsDisplay/utils/inventorySlice";

const useActionOnRedux = () => {
  const dispatch = useAppDispatch();
  const { allProducts, chosenProduct } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );

  return (
    action: "update" | "delete" | "add",
    newProduct?: adminProductInterface
  ) => {
    const builder = [...allProducts];
    action === "add" && newProduct && builder.push(newProduct);
    action === "delete" &&
      builder.splice(
        builder.findIndex((product) => product.id === chosenProduct?.id),
        1
      );
    if (action === "update" && newProduct) {
      builder[
        builder.findIndex((product) => product.id === chosenProduct?.id)
      ] = newProduct;
    }

    newProduct && dispatch(setChosenProduct(newProduct));
    builder && dispatch(setAllProducts(builder));
    builder && dispatch(setFilteredProducts(builder));
  };
};

export default useActionOnRedux;
