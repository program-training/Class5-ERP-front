import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  setOpenUserProducts,
  setUserProducts,
} from "../../../productsDisplay/utils/inventorySlice";
import { useEffect } from "react";
import { setAlert } from "../../../alert/utils/alertSlices";
import { useQuery } from "@apollo/client";
import { QUERY_MY_PRODUCTS } from "../../../../../apollo/queries-temporary-location/user-products-query";

const UserProductsButton = () => {
  const dispatch = useAppDispatch();
  const { userProducts } = useAppSelector(
    (state) => state.inventory.inventoryProducts
  );
  const { data, refetch } = useQuery(QUERY_MY_PRODUCTS);

  useEffect(() => {
    if (data) dispatch(setUserProducts(data.getMyProducts));
  }, [data]);

  const handelClick = () => {
    refetch()
      .then(() => dispatch(setUserProducts(data.getMyProducts)))
      .then(() => console.log(data));

    if (userProducts.length > 0) dispatch(setOpenUserProducts(true));
    if (userProducts.length === 0) {
      dispatch(
        setAlert({
          open: true,
          title: "error",
          message: "אין לך פה מוצרים יא אהבל",
          allowAccessProductPage: false,
        })
      );
    }
  };

  return (
    <Button onClick={handelClick} data-testid="user_products_button">
      my products
    </Button>
  );
};
export default UserProductsButton;
