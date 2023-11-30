import axios from "axios";
import { UserInterface } from "../../interface/userInterface";
const serverBaseURL = import.meta.env.VITE_BASE_URL;

const URL = `${serverBaseURL}/users/login`;

const loginReq = async (user: UserInterface) => {
  try {
    const response = await axios.post(URL, user);
    const TOKEN = response.data.resData.token;

    localStorage.setItem("ERP_TOKEN", TOKEN);
    localStorage.setItem("erpUsername", user.email);
    return response.status;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default loginReq;
