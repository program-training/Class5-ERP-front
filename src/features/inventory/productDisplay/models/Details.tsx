import { Box } from "@mui/material";
import { adminProductInterface } from "../../interfaces/adminProductInterface";
import Item from "./Item";

interface Props {
  product: adminProductInterface;
}

const Details = ({ product }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        maxWidth: "50%",
      }}
    >
      <Item item="name:" value={product.name} divider="top" />
      <Item item="category:" value={product.category} divider="none" />
      <Item item="description:" value={product.description} divider="bottom" />
      <Item
        item="is for sale:"
        value={product.isForSale ? "yes" : "no"}
        divider="none"
      />
      <Item item="quantity:" value={product.quantity} divider="bottom" />
      <Item item="cost price:" value={`${product.costPrice}$`} divider="none" />
      <Item item="sale price:" value={`${product.salePrice}$`} divider="none" />
      <Item
        item="discount percentage:"
        value={`${product.discountPercentage}%`}
        divider="bottom"
      />
      <Item item="created by:" value={`${product.createdBy}`} divider="none" />
      <Item item="supplier:" value={`${product.supplier}`} divider="bottom" />
    </Box>
  );
};

export default Details;
