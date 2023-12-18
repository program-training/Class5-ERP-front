import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../alert/utils/alertSlices";
import { adminProductInterface } from "../interfaces/adminProductInterface";
import useActionOnRedux from "./useActionOnRedux";
import updateProduct from "../services/updateProduct";
const useSubmitFromUpdateProduct = () => {
  const dispatch = useAppDispatch();
  const actionOnRedux = useActionOnRedux();
  return (newProduct: adminProductInterface, id: string | number) => {
    updateProduct(newProduct, id)
      .then((res) => {
        actionOnRedux("update", res);
        dispatch(
          setAlert({
            open: true,
            title: "success",
            message: "the product has been successfully updated",
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
            allowAccessProductPage: true,
          })
        );
      });
  };
};

export default useSubmitFromUpdateProduct;
