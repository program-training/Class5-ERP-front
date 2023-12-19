import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ProductDetails from "../../productDisplay/components/ProductDetails";
import TableHeadModel from "../models/TableHead";
import TableBodyModel from "../models/TableBody";
import UserProductsPage from "../models/UserInventoryPageModel";
import { useAppSelector } from "../../../../redux/hooks";
export interface ProductsProps {
  Data: string;
}

const ProductTable = ({ Data }: ProductsProps) => {
  const chosenProduct = useAppSelector(
    (state) => state.inventory.inventoryProducts.chosenProduct
  );
  return (
    <>
      <TableContainer component={Paper} sx={{ minWidth: "100%" }}>
        <Table sx={{ minWidth: "100%" }}>
          <TableHeadModel viewImage={true} />
          {Data === "filteredProducts" && <TableBodyModel />}
          {Data === "UserProducts" && <UserProductsPage />}
        </Table>
      </TableContainer>
      {chosenProduct && <ProductDetails />}
    </>
  );
};

export default ProductTable;
