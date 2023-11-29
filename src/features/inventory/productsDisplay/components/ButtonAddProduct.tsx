import Fab from "@mui/material/Fab";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import FormAddAndUpdate from "../../form/components/FormAddAndUpdate";
import { useState } from "react";

const ButtonAddProduct = () => {
  const [openAdd, setOpenAdd] = useState(false);
  return (
    <>
      <Fab
        onClick={() => setOpenAdd(true)}
        title="add product"
        color="primary"
        sx={{
          position: "fixed",
          right: "2%",
          bottom: "13%",
          height: "7%",
          width: "5%",
        }}
      >
        <PlaylistAddIcon />
      </Fab>
      <FormAddAndUpdate
        Props={{ formType: "addition", open: openAdd, setOpen: setOpenAdd }}
      />
    </>
  );
};

export default ButtonAddProduct;
