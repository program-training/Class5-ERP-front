import { Box } from "@mui/material";
import TableTitle from "../productsDisplay/components/TableTitle";
import ProductTable from "../productsDisplay/components/ProductTable";
import OverallInventoryTable from "../productsDisplay/components/OverallInventoryTable";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import {
  setAllProducts,
  setFilteredProducts,
} from "../productsDisplay/utils/inventorySlice";
import { Navigate } from "react-router-dom";
import ROUTES from "../../../routes/RoutesModel";
import getProductsFromServer from "../services/getProducts";
import Alert from "../alert/component/Alert";
import ButtonToTop from "../productsDisplay/components/ButtonToTop";
import ButtonAddProduct from "../productsDisplay/components/ButtonAddProduct";
import UserProducts from "../userInventory/components/userInventoryPage/UserInventoryPage";
import { S1, S2 } from "./style/PageStyle";
import MessagePendingOrError from "../productsDisplay/components/MessagePendingOrError";

const InventoryPage = () => {
  const [getProductsMessage, setGetProductsMessage] = useState<{
    message: string;
    title: "load products" | "error";
  } | null>(null);

  const dispatch = useAppDispatch();

  const { open } = useAppSelector((store) => store.alert);
  const user = useAppSelector((store) => store.user.user);

  useEffect(() => {
    if (!user) return;
    else {
      setGetProductsMessage({ message: "load", title: "load products" });
      getProductsFromServer()
        .then((res) => {
          setGetProductsMessage(null);
          dispatch(setAllProducts(res));
          dispatch(setFilteredProducts(res));
        })
        .catch((error) => {
          setGetProductsMessage({ message: error.message, title: "error" });
        });
    }
  }, [user]);
  if (!user) return <Navigate replace to={ROUTES.login_page} />;

  return (
    <Box sx={S1}>
      <Box sx={S2}>
        <OverallInventoryTable />
      </Box>
      <Box sx={S2}>
        <TableTitle title="Products" />
        <ProductTable Data="filteredProducts" />
        {getProductsMessage && (
          <MessagePendingOrError
            message={getProductsMessage.message}
            title={getProductsMessage.title}
          />
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
