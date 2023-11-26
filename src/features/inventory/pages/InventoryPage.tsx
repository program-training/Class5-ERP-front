import { Box } from "@mui/material";
import TableTitle from "../productsDisplay/components/TableTitle";
import ProductTable from "../productsDisplay/components/ProductTable";
import OverallInventoryTable from "../productsDisplay/components/OverallInventoryTable";
import AddProduct from "../actions/components/AddProduct";
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
  const { chosenProduct, allProducts, filteredProducts } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  const { open } = useAppSelector((store) => store.alert);
  const user = useAppSelector((store) => store.user.user);
  useEffect(() => {
    if (user === null) navigateTo(ROUTES.login_page);
    else {
      getProductsFromServer().then((res) => {
        dispatch(setAllProducts(res));
        dispatch(setFilteredProducts(res));
        // dispatch(setError({ open: true, title: "success", message: "!!!" }));
      });
    }
  }, [user]);
  // useEffect(() => {
  //   console.log("______");
  //   console.log("all", allProducts);
  //   console.log("filter", filteredProducts);
  //   console.log("chose", chosenProduct);
  // }, [chosenProduct, allProducts, filteredProducts]);
  return (
    <Box sx={{ backgroundColor: "#D0D3D9" }}>
      <Box sx={styleBoxTable}>
        <OverallInventoryTable />
      </Box>
      <Box sx={styleBoxTable}>
        <AddProduct />
        <TableTitle title="Products" />
        <ProductTable />
        {open && <Alert />}
      </Box>
    </Box>
  );
};
export default InventoryPage;
