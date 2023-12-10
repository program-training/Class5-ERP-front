import { useMutation } from "@apollo/client";
import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../alert/utils/alertSlices";
import useActionOnRedux from "./useActionOnRedux";
import MUTATION_DELETE_PRODUCT from "../../../apollo/queries-temporary-location/delete-product-mutation";
const useSubmitFromDeleteProduct = () => {
  const dispatch = useAppDispatch();
  const actionOnRedux = useActionOnRedux();
  const [deleteProduct] = useMutation(MUTATION_DELETE_PRODUCT)
  return (id: string | number, handleClose: () => void) => {
    deleteProduct({
      variables: {
        input: {
          id
        }
      }
    })
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
