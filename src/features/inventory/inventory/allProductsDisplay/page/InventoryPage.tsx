import { Box } from "@mui/material";
import TableTitle from "../components/TableTitle";
import ProductTable from "../components/ProductTable";
import OverallInventoryTable from "../components/OverallInventoryTable";
import AddProduct from "../components/AddProduct";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { useEffect } from "react";
import { setAllProducts, setFilteredProducts } from "../../../inventorySlice";
import { To, useNavigate } from "react-router-dom";
import ROUTES from "../../../../../routes/RoutesModel";
import getProductFromServer from "../service/getProducts";
import PopUP from "../../../../general/components/PopUp";

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
  const { open } = useAppSelector((store) => store.error);
  const { chosenProduct, allProducts, filteredProducts } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );

  const user = useAppSelector((store) => store.user.user);

  useEffect(() => {
    if (user === null) navigateTo(ROUTES.login_page);
    else {
      getProductFromServer().then((res) => {
        dispatch(setAllProducts(res));
        dispatch(setFilteredProducts(res));
      });
    }
  }, [user]);
  useEffect(() => {
    console.log("______");
    console.log("all", allProducts);
    console.log("filter", filteredProducts);
    console.log("chose", chosenProduct);
  }, [chosenProduct, allProducts, filteredProducts]);
  return (
    <Box sx={{ backgroundColor: "#D0D3D9" }}>
      <Box sx={styleBoxTable}>
        <OverallInventoryTable />
      </Box>
      <Box sx={styleBoxTable}>
        <AddProduct />
        <TableTitle title="Products" />
        <ProductTable />
        {open && <PopUP />}
      </Box>
    </Box>
  );
};
export default InventoryPage;
