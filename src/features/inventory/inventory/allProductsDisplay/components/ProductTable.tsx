import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ProductDetails from "../../specificProduct/components/ProductDetails";
import { useState } from "react";
import TableHeadModel from "../models/TableHead";
import TableBodyModel from "../models/TableBody";

const ProductTable = () => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHeadModel viewImage={true} />
          <TableBodyModel setOpenDetails={setOpenDetails} />
        </Table>
      </TableContainer>

      <ProductDetails
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
      />
    </>
  );
};

export default ProductTable;
