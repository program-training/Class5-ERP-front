import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/ImageSearch";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { setFilteredProducts } from "../../../../inventory/productsDisplay/utils/inventorySlice";
import { searchUtil } from "../../util/search/searchUtil";
const Search = () => {
  const [value, setValue] = useState<string>("");
  const { allProducts } = useAppSelector(
    (store) => store.inventory.inventoryProducts
  );
  const dispatch = useAppDispatch();
  const handlerClick = () => {
    dispatch(setFilteredProducts(allProducts));
    dispatch(setFilteredProducts(searchUtil(allProducts, value)));
  };

  return (
    <Paper
      data-testid="Search_Paper"
      sx={{
        display: "flex",
        width: 500,
        height: 45,
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="product, category, user added, supplier"
        value={value}
        onChange={(e) => setValue(`${e.target.value}`)}
        onKeyDown={(e) => e.key === "Enter" && handlerClick()}
      />
      <IconButton type="button" sx={{ p: "10px" }} onClick={handlerClick}>
        <SearchIcon data-testid="Search_Icon" />
      </IconButton>
      <Divider
        sx={{ height: 28, m: 0.5 }}
        orientation="vertical"
        data-testid="Search_Divider"
      />
    </Paper>
  );
};

export default Search;
