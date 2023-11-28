import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../alert/utils/alertSlices";
import { adminProductInterface } from "../interfaces/adminProductInterface";
import useActionOnRedux from "./useActionOnRedux";
import addProduct from "../services/addProduct";

const useSubmitFromAddProduct = () => {
  const dispatch = useAppDispatch();
  const actionOnRedux = useActionOnRedux();
  return (newProduct: adminProductInterface) => {
    addProduct(newProduct)
      .then((res) => {
        actionOnRedux("add", res);
        dispatch(
          setAlert({
            open: true,
            title: "success",
            message: "the product has been successfully added",
            allowAccessProductPage: true,
          })
        );
      })
      .catch((error) => {
        dispatch(
          setAlert({
            open: true,
            message: error.message,
            title: "error",
            allowAccessProductPage: false,
          })
        );
      });
  };
};

export default useSubmitFromAddProduct;
