import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Copyright } from "../signUp/signUpFeatures/Components";
import { S1, S2 } from "./loginFeatures/Style";
import { Bottom_links, TopPage, Sub_button } from "./loginFeatures/Components";
import { inputs } from "./loginFeatures/Validation";
import { ErrorMessage } from "@hookform/error-message";
import Typography from "@mui/material/Typography";
import {
  Password_validation,
  Email_validation,
} from "./loginFeatures/Validation";
import { Grid } from "@mui/material";

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>({ mode: "onChange", criteriaMode: "all" });
  const onSubmit = (data: inputs) => console.log(data);
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ border: "0.1px solid green", minWidth: "40vw" }}
    >
      <Box sx={S1}>
        <TopPage />
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              autoComplete="@gmail.com"
              autoFocus
              {...register("email", Email_validation)}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <Typography sx={S2} key={type}>
                    {message}
                  </Typography>
                ))
              }
            />
          </Grid>
          <Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              {...register("password", Password_validation)}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <Typography key={type} sx={S2}>
                    {message}{" "}
                  </Typography>
                ))
              }
            />
          </Grid>

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
  );
}
