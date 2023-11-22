import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { adminProductInterface } from "../../../../interfaces/adminProductInterface";

interface Props {
  register: UseFormRegister<adminProductInterface>;
  error: string | undefined;
  defaultValue: string | number;
}

const DiscountPercentageField = ({ register, error, defaultValue }: Props) => {
  return (
    <TextField
      defaultValue={defaultValue}
      type="number"
      margin="normal"
      fullWidth
      label="discount percentage"
      {...register("discountPercentage", {
        required: "discount percentage is required",
      })}
      error={!!error}
      helperText={error}
    />
  );
};

export default DiscountPercentageField;
