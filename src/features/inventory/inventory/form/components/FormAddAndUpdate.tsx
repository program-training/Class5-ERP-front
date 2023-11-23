import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";
import { useForm } from "react-hook-form";
import HolderForm from "../models/HolderForm";
import { Dispatch, FC } from "react";
import Buttons from "../models/Buttons";
import axios from "axios";
import { setError } from "../../../../general/errorsSlice";
// import PopUP from "../../../../general/PopUp";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import useHelperButtons from "../../../useHelperButtons";
interface Props {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  product?: adminProductInterface;
  formType: "addition" | "update";
}
type prop = {
  Props: Props;
};
const FormAddAndUpdate: FC<prop> = ({ Props }) => {
  const token = localStorage.getItem("TOKEN");

  const helperButton = useHelperButtons();
  const dispatch = useAppDispatch();
  const { chosenProduct } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  const { setOpen, open, product, formType } = Props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<adminProductInterface>({
    mode: "onChange",
    shouldUnregister: true,
  });

  const onSubmit = (newProduct: adminProductInterface) => {
    if (newProduct.isForSale === "true") newProduct.isForSale = true;
    if (newProduct.isForSale === "false") newProduct.isForSale = false;
    if (formType === "addition") {
      axios
        .post("http://localhost:3000/api/inventory", newProduct, {
          headers: {
            authorization: token,
          },
        })
        .then(() => {
          helperButton(newProduct, "add");
        })
        .catch((error) => {
          dispatch(
            setError({ open: true, message: error.message, title: "ERROR" })
          );
          console.log(error);
        });
    }
    if (formType === "update") {
      console.log(chosenProduct);

      axios
        .put(
          `http://localhost:3000/api/inventory/${chosenProduct?.id}`,
          newProduct,
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then(() => {
          helperButton(newProduct, "update");
        })
        .catch((error) => {
          dispatch(
            setError({ open: true, message: error.message, title: "ERROR" })
          );
          console.log(error);
        });
    }
  };

  return (
    <Dialog
      component="form"
      open={open}
      onClose={() => setOpen(false)}
      maxWidth={"sm"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <DialogTitle
        color="primary"
        variant="h4"
        sx={{ display: "flex", justifyContent: "center" }}
      >{`product ${formType} form`}</DialogTitle>
      {formType === "addition" ? (
        <HolderForm Props={{ errors: errors, register: register }} />
      ) : (
        <HolderForm
          Props={{ errors: errors, register: register, product: product }}
        />
      )}
      <Buttons isValid={isValid} setOpen={setOpen} formType={formType} />
    </Dialog>
  );
};

export default FormAddAndUpdate;
