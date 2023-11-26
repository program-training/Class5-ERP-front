import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { To, useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/RoutesModel";

const ErrorPage = () => {
  const navigate = useNavigate();
  const navigateTo = (to: To) => navigate(to);
  const handleClick = () => {
    navigateTo(ROUTES.HOME);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={handleClick}>
              Back Home
            </Button>
          </Grid>
          <Grid item xs={3}>
            <img
              src="magnifying-4340698_1280.jpg"
              alt="Page not found"
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default ErrorPage;
