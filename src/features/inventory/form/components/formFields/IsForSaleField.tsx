import { Box, Radio, Typography } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";
import Stack from "@mui/material/Stack";
import { useState } from "react";
interface Props {
  register: UseFormRegister<adminProductInterface>;
  defaultValue: boolean | true;
}

const styleRadoi = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const IsForSaleField = ({ defaultValue, register }: Props) => {
  const [selectedValue, setSelectedValue] = useState<boolean>(defaultValue);

  return (
    <Stack direction="row" spacing={5} margin="10px">
      <Box sx={styleRadoi}>
        <Typography>is for sale? </Typography>
      </Box>
      <Box sx={styleRadoi}>
        <Typography color={selectedValue === true ? "green" : ""}>
          yes
        </Typography>
        <Radio
          color="success"
          checked={selectedValue === true}
          onClick={() => setSelectedValue(true)}
          value={true}
          {...register("isForSale")}
        />
      </Box>
      <Box sx={styleRadoi}>
        <Typography color={selectedValue === false ? "error" : ""}>
          no
        </Typography>
        <Radio
          color="error"
          checked={selectedValue === false}
          onClick={() => setSelectedValue(false)}
          value={false}
          {...register("isForSale")}
        />
      </Box>
    </Stack>
  );
};

export default IsForSaleField;
