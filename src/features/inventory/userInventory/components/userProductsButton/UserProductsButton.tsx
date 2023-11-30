import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  setOpenUserProducts,
  setUserProducts,
} from "../../../productsDisplay/utils/inventorySlice";
import getUserProductsFromServer from "../../../services/UserProducts";
import { useEffect } from "react";
import { setAlert } from "../../../alert/utils/alertSlices";

const UserProductsButton = () => {
  const dispatch = useAppDispatch();
  const { userProducts, allProducts } = useAppSelector(
    (state) => state.inventory.inventoryProducts
  );

  useEffect(() => {
    getUserProductsFromServer().then((res) => dispatch(setUserProducts(res)));
  }, [allProducts]);

  const handelClick = () => {
    if (typeof userProducts !== "string") {
      dispatch(setOpenUserProducts(true));
    } else {
      dispatch(
        setAlert({
          open: true,
          title: "error",
          message: userProducts,
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
