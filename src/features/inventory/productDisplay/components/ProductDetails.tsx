import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import { useState } from "react";
import FormAddAndUpdate from "../../form/components/FormAddAndUpdate";
import AppBarModel from "../models/AppBar";
import Details from "../models/Details";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setOpenPageProducts } from "../../productsDisplay/utils/inventorySlice";
import { useQuery } from "@apollo/client";
import { GET_CHANGE } from "../../../../apollo/queries-temporary-location/get-change-on-product ID";
import StatistsGraph from "./StatistsGraph";
import MessagePendingOrError from "../../productsDisplay/components/MessagePendingOrError";

interface ProductStatistics {
  current_quantity: number;
  changed_on: string;
}
const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { chosenProduct } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  const { openProductPage } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  const { data, loading, error } = useQuery(GET_CHANGE, {
    variables: { getProductStatisticsId: chosenProduct?.id },
  });

  const [openUpdate, setOpenUpdate] = useState(false);

  const dates: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  // const dates: number[] = [];
  const quantity: number[] = [];

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
            {loading && (
              <MessagePendingOrError message={"load"} title={"load products"} />
            )}
            {!data && error && (
              <MessagePendingOrError message={error.message} title={"error"} />
            )}
            {data &&
              data.getProductStatistics.map((p: ProductStatistics) => {
                // dates.push(new Date(p.changed_on).getDate());
                quantity.push(p.current_quantity);
              })}
            <StatistsGraph dates={dates} quantity={quantity} />
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
