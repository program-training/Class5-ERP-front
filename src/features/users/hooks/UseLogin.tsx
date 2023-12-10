import { useEffect, useState } from "react";
import { UserInterface } from "../interface/userInterface";
import axios from "axios";
import { To, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../userSlice";
import ROUTES from "../../../routes/RoutesModel";
const serverBaseURL = import.meta.env.VITE_BASE_URL;

const useLogin = (user: UserInterface) => {
  const URL = `${serverBaseURL}/users/login`;
  const navigate = useNavigate();
  const navigateTo = (to: To) => navigate(to);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | number | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .post(URL, user)
      .then((res) => {
        const TOKEN = res.data.resData.token;
        localStorage.setItem("ERP_TOKEN", TOKEN);
        dispatch(setUser(user.email));
        setStatus(200);
        navigateTo(ROUTES.HOME);
      })
      .catch((error) => setError(error));
  });
  return [error, status];
};

export default useLogin;
