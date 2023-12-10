import { useMutation } from "@apollo/client";
import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../alert/utils/alertSlices";
import { adminProductInterface } from "../interfaces/adminProductInterface";
import useActionOnRedux from "./useActionOnRedux";
import { MUTATION_ADD_PRODUCT } from "../../../apollo/queries-temporary-location/add-product-mutation";
import normalizeData from "../form/normalize-data";

const useSubmitFromAddProduct = () => {
  const dispatch = useAppDispatch();
  const actionOnRedux = useActionOnRedux();
  const [addProduct] = useMutation(MUTATION_ADD_PRODUCT)
  return (newProduct: adminProductInterface) => {
    
    addProduct({
      variables: {
        input: {
          ...normalizeData(newProduct)
        }
      }
    })
      .then((res) => {        
        actionOnRedux("add", newProduct);//update this
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
        console.error(error);
        
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
