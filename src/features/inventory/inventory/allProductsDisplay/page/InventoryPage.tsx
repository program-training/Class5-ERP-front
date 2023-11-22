import { Box } from "@mui/material";
import TableTitle from "../components/TableTitle";
import ProductTable from "../components/ProductTable";
import OverallInventoryTable from "../components/OverallInventoryTable";
import AddProduct from "../components/AddProduct";
import Search from "../components/Search";
import { aproducts } from "../styles/aaa";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";
import { useState, useEffect } from "react";

const styleBoxTable = {
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
};

const InventoryPage = () => {
  const [allProducts, setAllProducts] = useState<adminProductInterface[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<
    adminProductInterface[]
  >([]);
  useEffect(() => {
    setAllProducts(aproducts);
    setFilteredProducts(aproducts);
  }, []);

  return (
    <>
      <Box>
        <AddProduct />
        <Search
          allProducts={allProducts}
          setFilteredProducts={setFilteredProducts}
        />
        <Box sx={styleBoxTable}>
          <TableTitle title="overall invertory" />
          <OverallInventoryTable />
        </Box>
        <Box sx={styleBoxTable}>
          <TableTitle title="products" />
          <ProductTable products={filteredProducts} />
        </Box>
      </Box>
    </>
  );
};
export default InventoryPage;
