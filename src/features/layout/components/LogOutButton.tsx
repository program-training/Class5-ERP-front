import { Button } from "@mui/material";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../../users/userSlice";

const LogOutButton = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    localStorage.removeItem("TOKEN");
    dispatch(setUser(null));
  };
  return (
    <Button variant="contained" color="secondary" onClick={handleClick}>
      Logout
    </Button>
  );
};
export default LogOutButton;
