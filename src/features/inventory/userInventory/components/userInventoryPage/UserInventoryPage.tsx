import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { setOpenUserProducts } from "../../../productsDisplay/utils/inventorySlice";
import ProductTable from "../../../productsDisplay/components/ProductTable";
import { ui1, ui2 } from "../../style/UserInventoryStyle";

export default function UserProducts() {
  const open = useAppSelector(
    (store) => store.inventory.inventoryProducts.openUserProducts
  );
  const userEmail = useAppSelector((state) => state.user.user)?.split("@")[0];
  const dispatch = useAppDispatch();

  return (
    <Dialog
      data-testid="User_inventory_dialog"
      open={open}
      sx={ui1}
      fullScreen
      onClose={() => dispatch(setOpenUserProducts(false))}
    >
      <DialogTitle
        sx={ui2}
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
