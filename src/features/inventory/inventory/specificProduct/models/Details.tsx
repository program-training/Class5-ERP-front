import { Box, Divider, ListItem, ListItemText } from "@mui/material";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";

interface Props {
  product: adminProductInterface;
}

const Details = ({ product }: Props) => {
  const lables = Object.keys(product) as Array<keyof adminProductInterface>;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "700px",
      }}
    >
      {lables.map(
        (lable, key) =>
          lable !== "id" &&
          lable !== "imageUrl" &&
          lable !== "imageAlt" && (
            <Box key={key}>
              <ListItem>
                <ListItemText
                  secondary={
                    lable === "isForSale"
                      ? "is for sale"
                      : lable === "costPrice"
                      ? "cost price"
                      : lable === "salePrice"
                      ? "sale price"
                      : lable === "discountPercentage"
                      ? "discount percentage"
                      : lable
                  }
                  sx={{ alignItems: "start", width: "250px" }}
                />
                <ListItemText
                  primary={
                    product[lable] === true
                      ? "yes"
                      : product[lable] === false
                      ? "no"
                      : product[lable]
                  }
                  sx={{ alignItems: "start", width: "400px" }}
                />
              </ListItem>
              <Divider />
            </Box>
          )
      )}
    </Box>
  );
};

export default Details;
