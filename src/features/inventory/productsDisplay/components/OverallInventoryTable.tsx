import { Box, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useAppSelector } from "../../../../redux/hooks";
import { getProductsDetails } from "../helpers/helpers";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import InventoryTwoToneIcon from "@mui/icons-material/InventoryTwoTone";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import IndeterminateCheckBoxTwoToneIcon from "@mui/icons-material/IndeterminateCheckBoxTwoTone";
import React from "react";

const OverallInventoryTable = () => {
  const products = useAppSelector((store) => store.inventory.inventoryProducts);
  const { sumCategories, sumProducts, sumLowInStock, sumOutOfStock } =
    getProductsDetails(products.allProducts);
  const overallData = [
    {
      name: "Categories",
      data: sumCategories,
      icon: <CategoryTwoToneIcon color="inherit" fontSize="large" />,
    },
    {
      name: "Total Products",
      data: sumProducts,
      icon: <InventoryTwoToneIcon color="info" fontSize="large" />,
    },
    {
      name: "Low Stock",
      data: sumLowInStock,
      icon: <Inventory2TwoToneIcon color="warning" fontSize="large" />,
    },
    {
      name: "Not In Stock",
      data: sumOutOfStock,
      icon: <IndeterminateCheckBoxTwoToneIcon color="error" fontSize="large" />,
    },
  ];
  return (
    <>
      <Paper
        sx={{
          height: "auto",
          width: "100%",
          display: "flex",
          borderRadius: 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Divider orientation="vertical" flexItem />

        {overallData &&
          overallData.map((d) => (
            <React.Fragment key={d.name}>
              <Box alignItems="center">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {d.icon}
                  <Typography variant="h4">{d.data}</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" color="#9e9e9e">
                    {d.name}
                  </Typography>
                </Box>
              </Box>
              <Divider orientation="vertical" flexItem />
            </React.Fragment>
          ))}
      </Paper>
    </>
  );
};

export default OverallInventoryTable;
