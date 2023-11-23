import { Menu, MenuItem } from "@mui/material";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../../users/userSlice";
import { Dispatch, SetStateAction } from "react";

type Props = {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  userName: string;
};

const LogOutMenu = ({ anchorEl, setAnchorEl, userName }: Props) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("username");
    dispatch(setUser(null));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>{userName}</MenuItem>
      <MenuItem onClick={handleClick}>Logout</MenuItem>
    </Menu>
  );
};
export default LogOutMenu;
