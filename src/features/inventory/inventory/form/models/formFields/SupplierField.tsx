import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { adminProductInterface } from "../../../../interfaces/adminProductInterface";

interface Props {
  register: UseFormRegister<adminProductInterface>;
  error: string | undefined;
  defaultValue: string | number;
}

const SupplierField = ({ register, error, defaultValue }: Props) => {
  return (
    <TextField
      defaultValue={defaultValue}
      margin="normal"
      fullWidth
      label="supplier"
      {...register("supplier", {
        required: "supplier is required",
        pattern: {
          value: /^[a-zA-Z\s-.&]+$/,
          message:
            "Only uppercase letters, lowercase letters and spaces should be entered",
        },
      })}
      error={!!error}
      helperText={error}
    />
  );
};

export default SupplierField;
