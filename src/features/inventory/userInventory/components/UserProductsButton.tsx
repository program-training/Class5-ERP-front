import { Button } from "@mui/material";
import { useAppDispatch } from "../../../../redux/hooks";
import { setOpenUserProducts } from "../../productsDisplay/utils/inventorySlice";

const UserProductsButton = () => {
  const dispatch = useAppDispatch();
  return (
    <Button onClick={() => dispatch(setOpenUserProducts(true))}>
      my products
    </Button>
  );
};
export default UserProductsButton;
