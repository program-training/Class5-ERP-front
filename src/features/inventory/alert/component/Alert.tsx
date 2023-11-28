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
  const BorderColor = title === "error" ? "red" : "blue";
  const styleAlert = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    // border: `3px solid ${BorderColor}`,
  };
  return (
    <Box>
      <Dialog
        open={open}
        sx={{
          maxWidth: "40%",
          maxHeight: "42%",
          position: "fixed",
          top: "8%",
          left: "30%",
          border: `3px solid ${BorderColor}`,
        }}
        fullScreen
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontSize: "250%",
            fontFamily: "serif",
          }}
          color={color}
        >
          {title} !
        </DialogTitle>
        <DialogContent sx={styleAlert}>
          <DialogContentText
            sx={{
              textAlign: "center",
              fontSize: "200%",
            }}
            color={color}
          >
            {message}
          </DialogContentText>
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
              color={"success"}
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
