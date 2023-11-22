import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { adminProductInterface } from "../../../../interfaces/adminProductInterface";

interface Props {
  register: UseFormRegister<adminProductInterface>;
  error: string | undefined;
  defaultValue: string | number;
}

const QuantityField = ({ register, error, defaultValue }: Props) => {
  return (
    <TextField
      defaultValue={defaultValue}
      type="number"
      margin="normal"
      fullWidth
      label="quantity"
      {...register("quantity", {
        required: "quantity is required",
      })}
      error={!!error}
      helperText={error}
    />
  );
};

export default QuantityField;
