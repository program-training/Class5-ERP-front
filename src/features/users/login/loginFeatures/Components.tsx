import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ROUTES from "../../../../routes/RoutesModel";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export function InputsFields() {
  return <></>;
}

export function Bottom_links() {
  return (
    <Grid container>
      <Grid item xs>
        <Link href={ROUTES.ERROR} variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid sx={{ color: "white" }}>gy</Grid>
      <Grid item>
        <Link href={ROUTES.sign_up} variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  );
}

export function TopPage() {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
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
