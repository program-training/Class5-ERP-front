import { TableBody } from "@mui/material";
import { StyledTableCell } from "../styles/styleLabelCell";
import { StyledTableRow } from "../styles/styleLabelRow";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setChosenProduct, setUserProducts } from "../utils/inventorySlice";
import { setOpenPageProducts } from "../utils/inventorySlice";
import getUserProductsFromServer from "../../services/UserProducts";
import { useEffect, useState } from "react";

const UserProductsPage = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>();

  useEffect(() => {
    getUserProductsFromServer()
      .then((res) => dispatch(setUserProducts(res)))
      .catch((res) => setError(res));
  }, []);

  const { userProducts } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );

  return (
    <TableBody>
      {userProducts?.map((product, key) => (
        <StyledTableRow
          key={key}
          sx={{
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#dbdbdb",
              transition: "background-color 0.2s",
            },
          }}
        >
          <StyledTableCell
            sx={{ padding: "0px", margin: "0px" }}
            onClick={() => {
              dispatch(setOpenPageProducts(true));
              dispatch(setChosenProduct(product));
            }}
            align="center"
          >
            <img width={"80px"} src={product.imageUrl} alt={product.imageAlt} />
          </StyledTableCell>
          <StyledTableCell
            onClick={() => {
              dispatch(setOpenPageProducts(true));
              dispatch(setChosenProduct(product));
            }}
            align="center"
          >
            {product.category}
          </StyledTableCell>
          <StyledTableCell
            onClick={() => {
              dispatch(setOpenPageProducts(true));
              dispatch(setChosenProduct(product));
            }}
            align="center"
          >
            {product.name}
          </StyledTableCell>
          <StyledTableCell
            onClick={() => {
              dispatch(setOpenPageProducts(true));
              dispatch(setChosenProduct(product));
            }}
            align="center"
          >
            {product.quantity}
          </StyledTableCell>
        </StyledTableRow>
      ))}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </TableBody>
  );
};

export default UserProductsPage;
