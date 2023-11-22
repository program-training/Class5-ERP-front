import { Box } from "@mui/material";
import TableTitle from "../components/TableTitle";
import ProductTable from "../components/ProductTable";
import OverallInventoryTable from "../components/OverallInventoryTable";
import AddProduct from "../components/AddProduct";
import { useAppDispatch } from "../../../../../redux/hooks";
import axios from "axios";
import { useEffect } from "react";
import { setAllProducts, setFilteredProducts } from "../../../inventorySlice";

const styleBoxTable = {
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
};

const InventoryPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios.get("http://localhost:3000/api/inventory").then((res) => {
      dispatch(setAllProducts(res.data));
      dispatch(setFilteredProducts(res.data));
    });
  }, [dispatch]);

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
