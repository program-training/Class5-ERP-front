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
import { To, useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/RoutesModel";
import getProductsFromServer from "../actions/services/getProducts";
import Alert from "../alert/component/Alert";
import ButtonToTop from "../productsDisplay/components/ButtonToTop";
import ButtonAddProduct from "../productsDisplay/components/ButtonAddProduct";

const styleBoxTable = {
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const InventoryPage = () => {
  const navigate = useNavigate();
  const navigateTo = (to: To) => navigate(to);
  const dispatch = useAppDispatch();

  const { open } = useAppSelector((store) => store.alert);
  const user = useAppSelector((store) => store.user.user);
  useEffect(() => {
    if (user === null) navigateTo(ROUTES.login_page);
    else {
      getProductsFromServer().then((res) => {
        dispatch(setAllProducts(res));
        dispatch(setFilteredProducts(res));
      });
    }
  }, [user]);

  return (
    <Box sx={{ backgroundColor: "#D0D3D9" }}>
      <Box sx={styleBoxTable}>
        <OverallInventoryTable />
      </Box>
      <Box sx={styleBoxTable}>
        <TableTitle title="Products" />
        <ProductTable />
        {open && <Alert />}
      </Box>
      <ButtonToTop />
      <ButtonAddProduct />
    </Box>
  );
};
export default InventoryPage;
