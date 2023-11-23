import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Search from "../../inventory/inventory/allProductsDisplay/components/Search";
import { useAppSelector } from "../../../redux/hooks";
import LogOutButton from "./LogOutButton";

const Header = () => {
  const user = useAppSelector((store) => store.user.user);

  return (
    <Box>
      {user && (
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Search />
            <LogOutButton />
            <Avatar src="teamLogo.svg"></Avatar>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
};
export default Header;
