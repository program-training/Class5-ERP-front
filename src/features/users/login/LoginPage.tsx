import { useForm } from "react-hook-form";
import { S1 } from "./components/Style";
import { inputs } from "./components/Validation";
import { Password_validation, Email_validation } from "./components/Validation";
import { Grid, Box, Container, TextField } from "@mui/material";
import BottomLinks from "./components/BottomLinks";
import { SubButton } from "./components/SubButton";
import { TopPage } from "./components/TopPage";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../userSlice";
import { To, useNavigate } from "react-router-dom";
import loginReq from "./service/loginReq";
import { setAlert } from "../../inventory/alert/utils/alertSlices";
import Alert from "../../inventory/alert/component/Alert";
import ROUTES from "../../../routes/RoutesModel";

const LogIn = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<inputs>({ mode: "onChange", criteriaMode: "all" });
  const navigate = useNavigate();
  const navigateTo = (to: To) => navigate(to);

  const onSubmit = (data: inputs) => {
    loginReq(data)
      .then(() => {
        dispatch(setUser(data.email));
        navigateTo(ROUTES.HOME);
      })
      .catch((error) =>
        dispatch(setAlert({ open: true, message: error.message }))
      );
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ border: "0.1px solid green", minWidth: "40vw" }}
    >
      <Box sx={S1}>
        <TopPage />
        <Grid
          container
          spacing={2}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              autoComplete="@gmail.com"
              autoFocus
              helperText={errors.email?.message}
              error={errors.email ? true : false}
              {...register("email", Email_validation)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              helperText={errors.password?.message}
              error={errors.password ? true : false}
              {...register("password", Password_validation)}
            />
          </Grid>

          <BottomLinks />
          <SubButton isValid={isValid} />
        </Grid>
      </Box>
      <Alert />
    </Container>
  );
};

export default LogIn;
