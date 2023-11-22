import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { adminProductInterface } from "../../../../interfaces/adminProductInterface";

interface Props {
  register: UseFormRegister<adminProductInterface>;
  error: string | undefined;
  defaultValue: string | number;
}

const URLImageField = ({ register, error, defaultValue }: Props) => {
  return (
    <TextField
      defaultValue={defaultValue}
      margin="normal"
      fullWidth
      label="url of image"
      {...register("imageUrl", {
        required: "url is required",
        pattern: {
          value: /^\S*$/,
          message:
            "Only uppercase letters, lowercase letters and spaces should be entered",
        },
      })}
      error={!!error}
      helperText={error}
    />
  );
};

export default URLImageField;
