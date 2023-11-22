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
  const product = useAppSelector(
    (store) => store.inventory.inventoryProducts.chosenProduct
  );
  const handleClose = () => {
    setOpenDetails(false);
  };
  const [openUpdate, setOpenUpdate] = useState(false);
  if (!product) return;
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
    </Box>
  );
};

export default ProductDetails;
