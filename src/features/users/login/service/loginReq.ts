import axios from "axios";
import { UserInterface } from "../../interface/userInterface";
const URL = "http://localhost:3000/api/users/login";

const loginReq = async (user: UserInterface) => {
  try {
    const response = await axios.post(URL, user);
    const TOKEN = response.data.resData.token;
    localStorage.setItem("TOKEN", TOKEN);
    localStorage.setItem("username", user.email);
    return response.status;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default loginReq;
