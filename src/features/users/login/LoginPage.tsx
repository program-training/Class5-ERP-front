import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Copyright } from "../signUp/signUpFeatures/Components";
import { handleSubmit } from "./loginFeatures/Validitions";
import { useForm } from "react-hook-form";
import { S1 } from "./loginFeatures/Style";
import {
  Email,
  Password,
  Bottom_links,
  TopPage,
  Sub_button,
} from "./loginFeatures/Components";
const defaultTheme = createTheme();

export function SignIn() {
  const [error, setError] = React.useState<string>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = () => {};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={S1}>
          <TopPage />
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Email />
            <Password />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Bottom_links />
            <Sub_button />
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
