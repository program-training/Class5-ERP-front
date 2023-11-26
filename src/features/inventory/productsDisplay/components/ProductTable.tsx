import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ProductDetails from "../../productDisplay/components/ProductDetails";
import TableHeadModel from "../models/TableHead";
import TableBodyModel from "../models/TableBody";

const ProductTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHeadModel viewImage={true} />
          <TableBodyModel />
        </Table>
      </TableContainer>
      <ProductDetails />
    </>
  );
};

export default ProductTable;
