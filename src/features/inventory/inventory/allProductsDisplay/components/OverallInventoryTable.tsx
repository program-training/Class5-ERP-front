import { Box, Grid, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { useAppSelector } from "../../../../../redux/hooks";
import { getProductsDetails } from "../helpers/helpers";

const OverallInventoryTable = () => {
  const products = useAppSelector((store) => store.inventory.inventoryProducts);
  const {sumCategories, sumProducts, sumLowInStock, sumOutOfStock} = getProductsDetails(products.allProducts);
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          borderRadius: 4,
          bgcolor: '#F0F1F3',
          paddingTop: "15px",
          paddingBottom: "15px"
        }}
      >
        <Grid container sx={{height:"100%", padding:"10px"}}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Stack direction="column"
                      alignItems="flex-start"
                      spacing={3}>
                <Typography variant="h4" sx={{color:"#1570EF"}}>Categories</Typography>
                <Typography variant="h6" sx={{color:"gray"}}>all the categories: {sumCategories}</Typography>
              </Stack>
              <Divider orientation="vertical" sx={{marginLeft:"80px"}}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Stack direction="column"
                      alignItems="flex-start"
                      spacing={3}>
                <Typography variant="h4" sx={{color:"#E19133"}}>Total Products</Typography>
                <Typography variant="h6" sx={{color:"gray"}}>sum of all products: {sumProducts}</Typography>
              </Stack>
              <Divider orientation="vertical" sx={{marginLeft:"80px"}}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Stack direction="column"
                      alignItems="flex-start"
                      spacing={3}>
                <Typography variant="h4" sx={{color:"#845EBC"}}>Low Stocks</Typography>
                <Typography variant="h6" sx={{color:"gray"}}>products below 5 in stock: {sumLowInStock}</Typography>
              </Stack>
              <Divider orientation="vertical" sx={{marginLeft:"80px"}}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Stack direction="column"
                      alignItems="flex-start"
                      spacing={3}>
                <Typography variant="h4" sx={{color:"#F36960"}}>Not In Stocks</Typography>
                <Typography variant="h6" sx={{color:"gray"}}>products out of stocks: {sumOutOfStock}</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      
      </Box>
    </>
  );
};

export default OverallInventoryTable;
