import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ROUTES from "../../../../routes/RoutesModel";

const BottomLinks = () => {
  return (
    <Grid container>
      <Grid sx={{ color: "white" }}>gy</Grid>
      <Grid item>
        <Link href={ROUTES.sign_up} variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  );
};

export default BottomLinks;
