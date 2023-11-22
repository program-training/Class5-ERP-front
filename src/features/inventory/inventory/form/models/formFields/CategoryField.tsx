import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { adminProductInterface } from "../../../../interfaces/adminProductInterface";

interface Props {
  register: UseFormRegister<adminProductInterface>;
  error: string | undefined;
  defaultValue: string | number;
}

const CategoryField = ({ register, error, defaultValue }: Props) => {
  return (
    <TextField
      defaultValue={defaultValue}
      margin="normal"
      fullWidth
      label="category"
      {...register("category", {
        required: "category is required",
        pattern: {
          value: /^[a-zA-Z\s-]+$/,
          message:
            "Only uppercase letters, lowercase letters and numbers, and spaces should be entered",
        },
      })}
      autoFocus
      error={!!error}
      helperText={error}
    />
  );
};

export default CategoryField;
