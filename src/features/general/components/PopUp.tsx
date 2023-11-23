import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { setError } from "../errorsSlice";

const PopUP = () => {
  const { open, title, message } = useAppSelector((store) => store.error);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setError({ open: false }));
  };

  return (
    <Box>
      <Dialog open={open} maxWidth="lg">
        <DialogTitle color="error">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} autoFocus color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default PopUP;
