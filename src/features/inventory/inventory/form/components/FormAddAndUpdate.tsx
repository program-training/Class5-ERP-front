import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";
import { useForm } from "react-hook-form";
import HolderForm from "../models/HolderForm";
import { Dispatch, FC } from "react";
import Buttons from "../models/Buttons";

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
  const { setOpen, open, product, formType } = Props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<adminProductInterface>({
    mode: "onChange",
    shouldUnregister: true,
  });

  const onSubmit = (data: adminProductInterface) => {
    console.log(data);
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
