import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Search from "../header/components/search/Search";
import { useAppSelector } from "../../../redux/hooks";
import LogOutMenu from "./LogOutMenu";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  const user = useAppSelector((store) => store.user.user);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <Box>
      {user && (
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Search />
            <LogOutMenu
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              userName={user}
            />
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <Avatar>{user[0]}</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
};

export default Header;
