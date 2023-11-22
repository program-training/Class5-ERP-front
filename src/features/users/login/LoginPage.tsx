import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { S1, S2 } from "./components/Style";
import { inputs } from "./components/Validation";
import { ErrorMessage } from "@hookform/error-message";
import Typography from "@mui/material/Typography";
import { Password_validation, Email_validation } from "./components/Validation";
import { Grid } from "@mui/material";
import BottomLinks from "./components/BottomLinks";
import { SubButton } from "./components/SubButton";
import { TopPage } from "./components/TopPage";

const LogIn = () => {
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

          <BottomLinks />
          <SubButton />
        </Box>
      </Box>
    </Container>
  );
};

export default LogIn;
