import Dialog from "@mui/material/Dialog";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";
import { Box } from "@mui/material";
import { useState } from "react";
import FormAddAndUpdate from "../../form/components/FormAddAndUpdate";
import AppBarModel from "../models/AppBar";
import Details from "../models/Details";

interface Props {
  openDetails: boolean;
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
  product: adminProductInterface;
}

const ProductDetails = ({ openDetails, setOpenDetails, product }: Props) => {
  const handleClose = () => {
    setOpenDetails(false);
  };
  const [openUpdate, setOpenUpdate] = useState(false);
  return (
    <>
      <Dialog
        scroll={"paper"}
        fullScreen
        open={openDetails}
        onClose={handleClose}
      >
        <AppBarModel
          handleClose={handleClose}
          setOpenUpdate={setOpenUpdate}
          product={product}
        />
        <Box sx={{ display: "flex", margin: 1 }}>
          <Details product={product} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img src={product.imageUrl} alt={product.imageAlt} width="100%" />
          </Box>
        </Box>
      </Dialog>
      <FormAddAndUpdate
        formType="update"
        open={openUpdate}
        setOpen={setOpenUpdate}
        product={product}
      />
    </>
  );
};

export default ProductDetails;
