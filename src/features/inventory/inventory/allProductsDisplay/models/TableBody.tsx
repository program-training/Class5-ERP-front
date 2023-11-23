import { TableBody } from "@mui/material";
import { StyledTableCell } from "../styles/styleLabelCell";
import { StyledTableRow } from "../styles/styleLabelRow";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { setChosenProduct } from "../../../inventorySlice";

interface Props {
  setOpenDetails: Dispatch<SetStateAction<boolean>>;
}

const TableBodyModel = ({ setOpenDetails }: Props) => {
  const dispatch = useAppDispatch();
  const { filteredProducts } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  return (
    <TableBody>
      {filteredProducts?.map((product, key) => (
        <StyledTableRow key={key}>
          <StyledTableCell
            sx={{ padding: "0px", margin: "0px" }}
            onClick={() => {
              setOpenDetails(true);
              dispatch(setChosenProduct(product));
            }}
            align="center"
          >
            <img width={"80px"} src={product.imageUrl} alt={product.imageAlt} />
          </StyledTableCell>
          <StyledTableCell
            onClick={() => {
              setOpenDetails(true);
              dispatch(setChosenProduct(product));
            }}
            align="center"
          >
            {product.category}
          </StyledTableCell>
          <StyledTableCell
            onClick={() => {
              setOpenDetails(true);
              dispatch(setChosenProduct(product));
            }}
            align="center"
          >
            {product.name}
          </StyledTableCell>
          <StyledTableCell
            onClick={() => {
              setOpenDetails(true);
              dispatch(setChosenProduct(product));
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
