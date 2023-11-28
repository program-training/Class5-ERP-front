import { Box } from "@mui/material";
import TableTitle from "../productsDisplay/components/TableTitle";
import ProductTable from "../productsDisplay/components/ProductTable";
import OverallInventoryTable from "../productsDisplay/components/OverallInventoryTable";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import {
  setAllProducts,
  setFilteredProducts,
} from "../productsDisplay/utils/inventorySlice";
import { Navigate } from "react-router-dom";
import ROUTES from "../../../routes/RoutesModel";
import getProductsFromServer from "../actions/services/getProducts";
import Alert from "../alert/component/Alert";
import ButtonToTop from "../productsDisplay/components/ButtonToTop";
import ButtonAddProduct from "../productsDisplay/components/ButtonAddProduct";
import UserProducts from "../userInventory/components/UserInventoryPage";
import { S1, S2 } from "./style/PageStyle";

const InventoryPage = () => {
  const dispatch = useAppDispatch();

  const { open } = useAppSelector((store) => store.alert);
  const user = useAppSelector((store) => store.user.user);

  useEffect(() => {
    getProductsFromServer().then((res) => {
      dispatch(setAllProducts(res));
      dispatch(setFilteredProducts(res));
    });
  }, []);
  if (!user) return <Navigate replace to={ROUTES.login_page} />;

  return (
    <Box sx={S1}>
      <Box sx={S2}>
        <OverallInventoryTable />
      </Box>
      <Box sx={S2}>
        <TableTitle title="Products" />
        <ProductTable Data="filteredProducts" />
        {open && <Alert />}
      </Box>
      <ButtonToTop />
      <ButtonAddProduct />
      <UserProducts />
    </Box>
  );
};
export default InventoryPage;
