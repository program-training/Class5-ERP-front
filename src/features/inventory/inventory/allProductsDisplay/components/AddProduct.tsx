import { useState } from "react";
import FormAddAndUpdate from "../../form/components/FormAddAndUpdate";
import { helperToAdd } from "../../form/utils/helperToAdd";
import { Button } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddProduct = () => {
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpenAdd(true)}
        variant="contained"
        endIcon={<PlaylistAddIcon />}
      >
        add product
      </Button>
      <FormAddAndUpdate
        formType="addition"
        open={openAdd}
        setOpen={setOpenAdd}
        product={helperToAdd}
      />
    </>
  );
};
export default AddProduct;
