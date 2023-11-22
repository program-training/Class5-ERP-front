import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import ROUTES from "../../../../routes/RoutesModel";

const BottomLinks = () => {
  return (
    <Grid container justifyContent="flex-end">
      <Grid item>
        <Link href={ROUTES.login_page} variant="body2">
          Already have an account? Sign in
        </Link>
      </Grid>
    </Grid>
  );
};
export default BottomLinks;
