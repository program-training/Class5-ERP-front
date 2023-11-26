import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { setAlert } from "../utils/alertSlices";
import { setOpenPageProducts } from "../../productsDisplay/utils/inventorySlice";

const Alert = () => {
  const { open, title, message, allowAccessProductPage } = useAppSelector(
    (store) => store.alert
  );
  const dispatch = useAppDispatch();
  const color = title === "error" ? "error" : "primary";
  const styleAlert = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  };
  return (
    <Box>
      <Dialog open={open} maxWidth="lg">
        <DialogTitle sx={styleAlert} color={color}>
          {title}
        </DialogTitle>
        <DialogContent sx={styleAlert}>
          <DialogContentText>{message}</DialogContentText>
          {message === "loads the request" && <CircularProgress />}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {allowAccessProductPage && (
            <Button
              onClick={() => {
                dispatch(setAlert({ open: false }));
                dispatch(setOpenPageProducts(true));
              }}
              color={color}
            >
              product page
            </Button>
          )}
          <Button
            onClick={() => {
              dispatch(setAlert({ open: false }));
              dispatch(setOpenPageProducts(false));
            }}
            color={color}
          >
            products page
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default Alert;
