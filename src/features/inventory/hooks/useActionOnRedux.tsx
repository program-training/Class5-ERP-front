import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { adminProductInterface } from "../interfaces/adminProductInterface";
import {
  setAllProducts,
  setChosenProduct,
  setFilteredProducts,
  setUserProducts,
} from "../productsDisplay/utils/inventorySlice";

const useActionOnRedux = () => {
  const dispatch = useAppDispatch();
  const { allProducts, chosenProduct, userProducts } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );

  return (
    action: "update" | "delete" | "add",
    newProduct?: adminProductInterface
  ) => {
    const builder = [...allProducts];
    action === "add" && newProduct && builder.push(newProduct);
    // add the new product to the user's products list in redux
    
    if (action === 'add' && newProduct) {

      dispatch(setUserProducts([...userProducts, newProduct]))
    }
    action === "delete" &&
      builder.splice(
        builder.findIndex((product) => product.id === chosenProduct?.id),
        1
      );
    if (action === "update" && newProduct) {
      console.log('old builder', builder);
      builder[
        builder.findIndex((product) => product.id === chosenProduct?.id)
      ] = newProduct;
      console.log('updated builder', builder);
    }

    newProduct && dispatch(setChosenProduct(newProduct));
    builder && dispatch(setAllProducts(builder));
    builder && dispatch(setFilteredProducts(builder));
  };
};

export default useActionOnRedux;
