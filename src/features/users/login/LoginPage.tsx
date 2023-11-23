import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
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
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <BottomLinks />
          <SubButton />
        </Box>
      </Box>
    </Container>
  );
}

export default LogIn;
