import * as React from "react";
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
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <Dialog
        // maxWidth="xl"
        open={open}
        fullWidth
        onClose={() => dispatch(setOpenUserProducts(false))}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`hello ${"name"}, here is your products`}</DialogTitle>
        <DialogContent>
          <ProductTable Data="UserProducts" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(setOpenUserProducts(false))}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
