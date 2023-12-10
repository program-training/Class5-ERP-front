import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Buttons from "./Buttons";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch } from "react";
import { adminProductInterface } from "../../interfaces/adminProductInterface";

interface Props {
  handleClose: () => void;
  setOpenUpdate: Dispatch<React.SetStateAction<boolean>>;
  product: adminProductInterface;
}

const AppBarModel = ({ handleClose, setOpenUpdate, product }: Props) => {
  return (
    <AppBar sx={{ position: "relative" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          {product.name}
        </Typography>
        <Box>
          <Buttons setOpenUpdate={setOpenUpdate} handleClose={handleClose} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default AppBarModel;
