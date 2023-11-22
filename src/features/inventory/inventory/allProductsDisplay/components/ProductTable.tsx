import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ProductDetails from "../../specificProduct/components/ProductDetails";
import { useState } from "react";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";
import TableHeadModel from "../models/TableHead";
import TableBodyModel from "../models/TableBody";

interface Props {
  products: adminProductInterface[];
}

const ProductTable = ({ products }: Props) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [product, setProduct] = useState<adminProductInterface>();
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHeadModel viweImage={true} />
          <TableBodyModel
            products={products}
            setOpenDetails={setOpenDetails}
            setProduct={setProduct}
          />
        </Table>
      </TableContainer>
      {product && (
        <ProductDetails
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
          product={product}
        />
      )}
    </>
  );
};

export default ProductTable;
