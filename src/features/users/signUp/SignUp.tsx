import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { S1 } from "./signUpFeatures/Style";
import { S2 } from "../login/components/Style";
import { ErrorMessage } from "@hookform/error-message";
import Typography from "@mui/material/Typography";
import {
  Password_validation,
  Email_validation,
} from "../login/components/Validation";
import Grid from "@mui/material/Grid";
import { SignUpInputs } from "./signUpFeatures/Validitions";
import BottomLinks from "./components/BottomLinks";
import SubButton from "./components/SubButton";
import TopPage from "./components/TopPage";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({ mode: "onChange", criteriaMode: "all" });
  const onSubmit = (data: SignUpInputs) => {
    const { Password, email } = data;
    const data1 = { username: email, password: Password };
    axios
      .post("http://localhost:3000/api/users/signup", data1)
      .catch((error) => console.log(error));
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={S1}>
        <TopPage />
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                label="First Name"
                autoFocus
                {...register("firstName")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                autoComplete="family-name"
                {...register("lastName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
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
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="new-password"
                {...register("Password", Password_validation)}
              />
              <ErrorMessage
                errors={errors}
                name="Password"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <Typography key={type} sx={S2}>
                      {message}
                    </Typography>
                  ))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="manager-password"
                type="password"
                autoComplete="new-password"
                {...register("managerPassword")}
              />
            </Grid>
          </Grid>
          <SubButton />
          <BottomLinks />
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
