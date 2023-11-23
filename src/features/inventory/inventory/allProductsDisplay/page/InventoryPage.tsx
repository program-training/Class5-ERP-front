import { Box } from "@mui/material";
import TableTitle from "../components/TableTitle";
import ProductTable from "../components/ProductTable";
import OverallInventoryTable from "../components/OverallInventoryTable";
import AddProduct from "../components/AddProduct";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import axios from "axios";
import { useEffect } from "react";
import { setAllProducts, setFilteredProducts } from "../../../inventorySlice";
import { setError } from "../../../../general/errorsSlice";
import PopUP from "../../../../general/PopUp";

const styleBoxTable = {
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
};

const InventoryPage = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((store) => store.error);
  const { allProducts } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  const { filteredProducts } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  const { chosenProduct } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGNsYXNzLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJG5VeDA4bjN4bVpsRDIvYjRIcFIxRS5ZSXhvdFdsb2RROGtPOFE4d0FlUGtEWi84WXpOU2VPIiwiaWF0IjoxNzAwNjU3NDc2fQ.zzFsvvzPdhLps3cHkIvtDhEA4PiVprfp5pFuUYwmUNA";
    axios
      .get("http://localhost:3000/api/inventory", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        dispatch(setAllProducts(res.data));
        dispatch(setFilteredProducts(res.data));
      })
      .catch((error) =>
        dispatch(
          setError({ open: true, message: error.message, title: "ERROR" })
        )
      );
  }, [dispatch]);
  useEffect(() => {
    // console.log("-------");
    // console.log("all products", allProducts);
    // console.log("filtered products", filteredProducts);
    // console.log("chosen product", chosenProduct);
  }, [allProducts, filteredProducts, chosenProduct]);

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
        {open && <PopUP />}
      </Box>
    </Box>
  );
};
export default InventoryPage;
