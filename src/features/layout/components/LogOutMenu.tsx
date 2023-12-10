import { Menu, MenuItem } from "@mui/material";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../../users/userSlice";
import { Dispatch, SetStateAction } from "react";
import UserProductsButton from "../../inventory/userInventory/components/userProductsButton/UserProductsButton";

type Props = {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  userName: string;
};

const LogOutMenu = ({ anchorEl, setAnchorEl, userName }: Props) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    localStorage.removeItem("ERP_TOKEN");
    localStorage.removeItem("erpUsername");
    dispatch(setUser(null));
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
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
      <MenuItem onClick={handleClose}>
        <UserProductsButton />
      </MenuItem>
    </Menu>
  );
};
export default LogOutMenu;
