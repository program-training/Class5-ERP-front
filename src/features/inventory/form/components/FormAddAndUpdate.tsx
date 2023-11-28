import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { adminProductInterface } from "../../interfaces/adminProductInterface";
import { useForm } from "react-hook-form";
import HolderForm from "./HolderForm";
import { Dispatch } from "react";
import Buttons from "./Buttons";
import Alert from "../../alert/component/Alert";
import useSubmitFromAddProduct from "../../hooks/useSubmitFromAddProduct";
import useSubmitFromUpdateProduct from "../../hooks/useSubmitFromUpdateProduct";
import useActionPending from "../../hooks/useActionPending";
import { useAppSelector } from "../../../../redux/hooks";

type Props = {
  Props: {
    open: boolean;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    product?: adminProductInterface;
    formType: "addition" | "update";
  };
};

const FormAddAndUpdate = ({ Props }: Props) => {
  const pending = useActionPending();
  const submitAdd = useSubmitFromAddProduct();
  const submitUpdate = useSubmitFromUpdateProduct();
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
    if (chosenProduct?.createdBy)
      newProduct.createdBy = chosenProduct.createdBy;
    pending();
    if (formType === "addition") submitAdd(newProduct);
    if (chosenProduct && formType === "update")
      submitUpdate(newProduct, chosenProduct.id);
  };

  return (
    <>
      <Alert />
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
    </>
  );
};

export default FormAddAndUpdate;
