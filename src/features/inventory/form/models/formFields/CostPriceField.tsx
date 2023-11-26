import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";

interface Props {
  register: UseFormRegister<adminProductInterface>;
  error: string | undefined;
  defaultValue: string | number | undefined;
}

const CostPriceField = ({ register, error, defaultValue }: Props) => {
  return (
    <TextField
      defaultValue={defaultValue}
      type="number"
      margin="normal"
      fullWidth
      label="cost price"
      {...register("costPrice", {
        required: "cost price is required",
        pattern: {
          value: /^\d+(\.\d+)?$/,
          message: "Must be a positive number",
        },
      })}
      error={!!error}
      helperText={error}
    />
  );
};

export default CostPriceField;
