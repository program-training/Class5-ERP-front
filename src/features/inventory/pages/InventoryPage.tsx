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
import Alert from "../alert/component/Alert";
import ButtonToTop from "../productsDisplay/components/ButtonToTop";
import ButtonAddProduct from "../productsDisplay/components/ButtonAddProduct";
import UserProducts from "../userInventory/components/userInventoryPage/UserInventoryPage";
import { S1, S2 } from "./style/PageStyle";
import MessagePendingOrError from "../productsDisplay/components/MessagePendingOrError";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCT } from "../../../apollo/queries-temporary-location/all-products-query";

const InventoryPage = () => {
  const dispatch = useAppDispatch();

  const { open } = useAppSelector((store) => store.alert);
  const user = useAppSelector((store) => store.user.user);
  const { data: productsData, loading, error } = useQuery(QUERY_ALL_PRODUCT);

  useEffect(() => {
    if (!user || !productsData) return;

    dispatch(setAllProducts(productsData.getProducts));
    dispatch(setFilteredProducts(productsData.getProducts));
  }, [user, productsData, dispatch]);
  if (!user) return <Navigate replace to={ROUTES.login_page} />;

  return (
    <Box sx={S1}>
      <Box sx={S2}>
        <OverallInventoryTable />
      </Box>
      <Box sx={S2}>
        <TableTitle title="Products" />
        <ProductTable Data="filteredProducts" />
        {loading && (
          <MessagePendingOrError message={"load"} title={"load products"} />
        )}
        {!productsData && error && (
          <MessagePendingOrError message={error.message} title={"error"} />
        )}
        {open && <Alert />}
      </Box>
      <ButtonToTop />
      <ButtonAddProduct />
      <UserProducts />
    </Box>
  );
};
export default InventoryPage;
