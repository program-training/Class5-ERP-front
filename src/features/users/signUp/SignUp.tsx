import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { S1 } from "./components/Style";
import {
  Password_validation,
  Email_validation,
} from "../login/components/Validation";
import Grid from "@mui/material/Grid";
import { SignUpInputs } from "./components/Validitions";
import BottomLinks from "./components/BottomLinks";
import SubButton from "./components/SubButton";
import TopPage from "./components/TopPage";
import signUpReq from "./service/signUpReq";
import { To, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setAlert } from "../../inventory/alert/utils/alertSlices";
import Alert from "../../inventory/alert/component/Alert";
import ROUTES from "../../../routes/RoutesModel";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpInputs>({ mode: "onChange", criteriaMode: "all" });
  const navigate = useNavigate();
  const navigateTo = (to: To) => navigate(to);
  const dispatch = useAppDispatch();
  const onSubmit = (data: SignUpInputs) => {
    const { password, email } = data;
    const userToSend = { email, password };
    signUpReq(userToSend)
      .then(() => navigateTo(ROUTES.login_page))
      .catch((error) =>
        dispatch(setAlert({ open: true, message: error.message }))
      );
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
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                helperText={errors.email?.message}
                error={errors.email ? true : false}
                label="Email Address"
                autoComplete="email"
                {...register("email", Email_validation)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                helperText={errors.password?.message}
                error={errors.password ? true : false}
                label="password"
                type="password"
                autoComplete="new-password"
                {...register("password", Password_validation)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="manager-password"
                type="password"
                autoComplete="new-password"
                {...register("managerPassword")}
              />
            </Grid>
          </Grid>
          <SubButton isValid={isValid} />
          <BottomLinks />
        </Box>
      </Box>
      <Alert />
    </Container>
  );
};
export default SignUp;
