import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/ImageSearch";
import { SetStateAction, useState } from "react";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { setFilteredProducts } from "../../../inventorySlice";

const Search = () => {
  const [value, setValue] = useState<SetStateAction<string>>();
  const allProducts = useAppSelector(
    (store) => store.inventory.inventoryProducts.allProducts
  );
  const dispatch = useAppDispatch();
  const handlerClick = () => {
    dispatch(setFilteredProducts(allProducts));

    const helper: adminProductInterface[] = [];

    allProducts.forEach((product) => {
      const regex = new RegExp(`${value}`, `i`);

      regex.test(product.name)
        ? helper.push(product)
        : regex.test(product.category) && helper.push(product);
    });
    dispatch(setFilteredProducts(helper));
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="search product or category"
        value={value}
        onChange={(e) => setValue(`${e.target.value}`)}
      />
      <IconButton type="button" sx={{ p: "10px" }} onClick={handlerClick}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
};
export default Search;
