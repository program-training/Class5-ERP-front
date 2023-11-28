import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../alert/utils/alertSlices";
import deleteProduct from "../services/deleteProduct";
import useActionOnRedux from "./useActionOnRedux";
const useSubmitFromDeleteProduct = () => {
  const dispatch = useAppDispatch();
  const actionOnRedux = useActionOnRedux();
  return (id: string | number, handleClose: () => void) => {
    deleteProduct(id)
      .then(() => {
        actionOnRedux("delete");
        handleClose();
        dispatch(
          setAlert({
            open: true,
            title: "success",
            message: "the product has been successfully deleted",
            allowAccessProductPage: false,
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

export default useSubmitFromDeleteProduct;
