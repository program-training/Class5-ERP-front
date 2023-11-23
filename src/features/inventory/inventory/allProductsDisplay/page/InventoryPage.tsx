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
import { getUser } from "../../../../users/userSlice";
import getProductFromServer from "../service/getProducts";

const styleBoxTable = {
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
};

const InventoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  dispatch(getUser());
  const user = useAppSelector((store) => store.user.user);

  useEffect(() => {
    const navigateTo = (to: To) => navigate(to);
    if (user === null) navigateTo(ROUTES.login_page);

    getProductFromServer().then((res) => {
      dispatch(setAllProducts(res));
      dispatch(setFilteredProducts(res));
    });
  }, [user]);

  return (
    <Box>
      <AddProduct />
      <Box sx={styleBoxTable}>
        <TableTitle title="Overall inventory" />
        <OverallInventoryTable />
      </Box>
      <Box sx={styleBoxTable}>
        <TableTitle title="Products" />
        <ProductTable />
      </Box>
    </Box>
  );
};
export default InventoryPage;
