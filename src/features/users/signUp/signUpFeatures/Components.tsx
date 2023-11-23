import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ROUTES from "../../../../routes/RoutesModel";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export function Fields() {
  return <></>;
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
