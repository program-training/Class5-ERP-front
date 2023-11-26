import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useAppSelector } from "../../../../../redux/hooks";
import { getProductsDetails } from "../helpers/helpers";
import TableTitle from "./TableTitle";

const OverallInventoryTable = () => {
  const products = useAppSelector((store) => store.inventory.inventoryProducts);
  const { sumCategories, sumProducts, sumLowInStock, sumOutOfStock } =
    getProductsDetails(products.allProducts);
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          borderRadius: 4,
        }}
      >
        <Paper
          sx={{
            height: "100%",
            borderRadius: 2,
          }}
        >
          <TableTitle title="Overall inventory" />
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box
                minHeight={"3em"}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack direction="column" alignItems="center" spacing={3}>
                  <Typography variant="body1" fontSize="35px" color="primary">
                    Categories
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="35px"
                    sx={{ color: "gray" }}
                  >
                    {sumCategories}
                  </Typography>
                </Stack>
                <Divider orientation="vertical" sx={{ marginLeft: "80px" }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack direction="column" alignItems="center" spacing={3}>
                  <Typography
                    variant="body1"
                    fontSize="34px"
                    sx={{ color: "#E19133" }}
                  >
                    Total Products
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="35px"
                    sx={{ color: "gray" }}
                  >
                    {sumProducts}
                  </Typography>
                </Stack>
                <Divider orientation="vertical" sx={{ marginLeft: "80px" }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack direction="column" alignItems="center" spacing={3}>
                  <Typography
                    variant="body1"
                    fontSize="35px"
                    sx={{ color: "#845EBC" }}
                  >
                    Low Stock
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="35px"
                    sx={{ color: "gray" }}
                  >
                    {sumLowInStock}
                  </Typography>
                </Stack>
                <Divider orientation="vertical" sx={{ marginLeft: "80px" }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack direction="column" alignItems="center" spacing={3}>
                  <Typography
                    variant="body1"
                    fontSize="35px"
                    sx={{ color: "#F36960" }}
                  >
                    Not In Stock
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="35px"
                    sx={{ color: "gray" }}
                  >
                    {sumOutOfStock}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default OverallInventoryTable;
