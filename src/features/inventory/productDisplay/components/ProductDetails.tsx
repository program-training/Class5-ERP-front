import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import { useState } from "react";
import FormAddAndUpdate from "../../form/components/FormAddAndUpdate";
import AppBarModel from "../models/AppBar";
import Details from "../models/Details";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setOpenPageProducts } from "../../productsDisplay/utils/inventorySlice";
import StatistsGraph from "./StatistsGraph";

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { chosenProduct } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  const { openProductPage } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );

  const [openUpdate, setOpenUpdate] = useState(false);

  if (!chosenProduct) return;

  return (
    <Box>
      <Dialog
        fullScreen
        scroll={"paper"}
        open={openProductPage}
        onClose={() => dispatch(setOpenPageProducts(false))}
      >
        <AppBarModel
          handleClose={() => dispatch(setOpenPageProducts(false))}
          setOpenUpdate={setOpenUpdate}
          product={chosenProduct}
        />
        <Box sx={{ display: "flex", margin: 1, maxWidth: "100%" }}>
          <Box>
            <Details product={chosenProduct} />
            <StatistsGraph productId={chosenProduct.id} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "50%",
            }}
          >
            <img
              src={chosenProduct.imageUrl}
              alt={chosenProduct.imageAlt}
              style={{
                minWidth: "50%",
                maxWidth: "80%",
                marginBottom: "50%",
              }}
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
