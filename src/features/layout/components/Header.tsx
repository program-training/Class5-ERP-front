import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Search from "../../inventory/inventory/allProductsDisplay/components/Search";

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Search
            allProducts={allProducts}
            setFilteredProducts={setFilteredProducts}
          />
          <Avatar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
