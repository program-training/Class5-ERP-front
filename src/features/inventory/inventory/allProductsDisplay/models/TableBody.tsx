import { TableBody } from "@mui/material";
import { StyledTableCell } from "../styles/styleLabelCell";
import { StyledTableRow } from "../styles/styleLabelRow";
import { Dispatch, SetStateAction } from "react";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";

interface Props {
  products: adminProductInterface[];
  setOpenDetails: Dispatch<SetStateAction<boolean>>;
  setProduct: Dispatch<SetStateAction<adminProductInterface | undefined>>;
}

const TableBodyModel = ({ products, setOpenDetails, setProduct }: Props) => {
  return (
    <TableBody>
      {products.map((product, key) => (
        <StyledTableRow key={key}>
          <StyledTableCell
            sx={{ padding: "0px", margin: "0px" }}
            onClick={() => {
              setOpenDetails(true);
              setProduct(product);
            }}
            align="center"
          >
            <img width={"80px"} src={product.imageUrl} alt={product.imageAlt} />
          </StyledTableCell>
          <StyledTableCell
            onClick={() => {
              setOpenDetails(true);
              setProduct(product);
            }}
            align="center"
          >
            {product.category}
          </StyledTableCell>
          <StyledTableCell
            onClick={() => {
              setOpenDetails(true);
              setProduct(product);
            }}
            align="center"
          >
            {product.name}
          </StyledTableCell>
          <StyledTableCell
            onClick={() => {
              setOpenDetails(true);
              setProduct(product);
            }}
            align="center"
          >
            {product.quantity}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyModel;
