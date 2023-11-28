// import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setOpenUserProducts } from "../../productsDisplay/utils/inventorySlice";
import ProductTable from "../../productsDisplay/components/ProductTable";

export default function UserProducts() {
  const open = useAppSelector(
    (store) => store.inventory.inventoryProducts.openUserProducts
  );
  const userEmail = useAppSelector((state) => state.user.user)?.split("@")[0];
  const dispatch = useAppDispatch();

  return (
    <Dialog
      open={open}
      sx={{
        maxWidth: "50%",
        position: "fixed",
        left: "25%",
        top: "5%",
        maxHeight: "60%",
      }}
      fullScreen
      onClose={() => dispatch(setOpenUserProducts(false))}
    >
      <DialogTitle
        sx={{
          width: "100%",
          textAlign: "center",
          fontWeight: "bolder",
          color: "Highlight",
        }}
      >{`hello ${userEmail}, here is your products`}</DialogTitle>
      <DialogContent sx={{ width: "100%" }}>
        <ProductTable Data="UserProducts" />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(setOpenUserProducts(false))}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
