import { useForm } from "react-hook-form";
import { S1, S2 } from "./components/Style";
import { inputs } from "./components/Validation";
import { ErrorMessage } from "@hookform/error-message";
import { Password_validation, Email_validation } from "./components/Validation";
import { Grid, Box, Typography, Container, TextField } from "@mui/material";
import BottomLinks from "./components/BottomLinks";
import { SubButton } from "./components/SubButton";
import { TopPage } from "./components/TopPage";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../userSlice";
import { To, useNavigate } from "react-router-dom";
import loginReq from "./service/loginReq";
import { setAlert } from "../../inventory/alert/utils/alertSlices";
import Alert from "../../inventory/alert/component/Alert";

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
        navigateTo("/");
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

          <BottomLinks />
          <SubButton isValid={isValid} />
        </Box>
      </Box>
      <Alert />
    </Container>
  );
};

export default LogIn;
