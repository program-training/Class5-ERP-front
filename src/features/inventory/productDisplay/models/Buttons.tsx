import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { Dispatch } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import useSubmitFromDeleteProduct from "../../hooks/useSubmitFromDeleteProduct";
import useActionPending from "../../hooks/useActionPending";

interface Props {
  setOpenUpdate: Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}

const Buttons = ({ setOpenUpdate, handleClose }: Props) => {
  const actionDelete = useSubmitFromDeleteProduct();
  const pending = useActionPending();

  const { chosenProduct } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );

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
          pending();
          chosenProduct && actionDelete(chosenProduct.id, handleClose);
        }}
      >
        Delete
      </Button>
    </Stack>
  );
};
export default Buttons;
