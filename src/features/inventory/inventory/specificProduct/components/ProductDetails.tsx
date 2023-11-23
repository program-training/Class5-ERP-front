import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import { useState } from "react";
import FormAddAndUpdate from "../../form/components/FormAddAndUpdate";
import AppBarModel from "../models/AppBar";
import Details from "../models/Details";
import { useAppSelector } from "../../../../../redux/hooks";

interface Props {
  openDetails: boolean;
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetails = ({ openDetails, setOpenDetails }: Props) => {
  const { chosenProduct } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );

  const handleClose = () => {
    setOpenDetails(false);
  };

  const [openUpdate, setOpenUpdate] = useState(false);
  if (!chosenProduct) return;

  return (
    <Box>
      <Dialog
        scroll={"paper"}
        fullScreen
        open={openDetails}
        onClose={handleClose}
      >
        <AppBarModel
          handleClose={handleClose}
          setOpenUpdate={setOpenUpdate}
          product={chosenProduct}
        />
        <Box sx={{ display: "flex", margin: 1 }}>
          <Details product={chosenProduct} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={chosenProduct.imageUrl}
              alt={chosenProduct.imageAlt}
              width="100%"
            />
          </Box>
        </Box>
      </Dialog>
      <FormAddAndUpdate
        Props={{
          formType: "update",
          open: openUpdate,
          setOpen: setOpenUpdate,
          product: chosenProduct,
        }}
      />
    </Box>
  );
};

export default ProductDetails;
