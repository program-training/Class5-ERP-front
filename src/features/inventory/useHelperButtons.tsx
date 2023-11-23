import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { adminProductInterface } from "./interfaces/adminProductInterface";
import {
  setAllProducts,
  setChosenProduct,
  setFilteredProducts,
} from "./inventorySlice";

const useHelperButtons = () => {
  const dispatch = useAppDispatch();
  const { allProducts, chosenProduct } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );

  return (
    newProduct: adminProductInterface,
    action: "update" | "delete" | "add"
  ) => {
    let builder;
    if (action === "add") builder = [...allProducts, newProduct];
    if (action === "update") {
      dispatch(setChosenProduct(newProduct));
      builder = [...allProducts];
      builder[
        builder.findIndex((product) => product.id === chosenProduct?.id)
      ] = newProduct;
    }
    builder && dispatch(setAllProducts(builder));
    builder && dispatch(setFilteredProducts(builder));
  };
};

export default useHelperButtons;
