import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ROUTES from "../../../../routes/RoutesModel";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export function Fields() {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="given-name"
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="manager-password"
          label="manager-password"
          type="password"
          id="manager-password"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="keep me sign"
        />
      </Grid>
    </>
  );
}

export function Bottom_links() {
  return (
    <Grid container justifyContent="flex-end">
      <Grid item>
        <Link href={ROUTES.login_page} variant="body2">
          Already have an account? Sign in
        </Link>
      </Grid>
    </Grid>
  );
}

export function TopPage() {
  return (
    <>
      {" "}
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
    </>
  );
}
export function Sub_button() {
  return (
    <>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </>
  );
}
export function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
