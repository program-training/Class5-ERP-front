import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { Dispatch } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import axios from "axios";
import { setError } from "../../../../general/errorsSlice";
import { setAllProducts, setFilteredProducts } from "../../../inventorySlice";

interface Props {
  setOpenUpdate: Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}

const Buttons = ({ setOpenUpdate, handleClose }: Props) => {
  const { allProducts, chosenProduct } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("TOKEN");
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={() => setOpenUpdate(true)}
        variant="contained"
        endIcon={<EditNoteIcon />}
      >
        update
      </Button>
      <Button
        variant="contained"
        endIcon={<DeleteSweepIcon />}
        onClick={() => {
          console.log(chosenProduct?.id);

          axios
            .delete(
              `http://localhost:3000/api/inventory/${chosenProduct?.id}`,
              {
                headers: {
                  authorization: token,
                },
              }
            )
            .then(() => {
              const helper = [...allProducts];
              helper.splice(
                helper.findIndex((product) => product.id === chosenProduct?.id),
                1
              );
              dispatch(setAllProducts(helper));
              dispatch(setFilteredProducts(helper));
              handleClose();
            })
            .catch((error) => {
              dispatch(
                setError({ open: true, message: error.message, title: "ERROR" })
              );
            });
        }}
      >
        Delete
      </Button>
    </Stack>
  );
};
export default Buttons;
