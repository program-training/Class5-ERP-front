import axios from "axios";
import { UserInterface } from "../../interface/userInterface";
import loginReq from "../../login/service/loginReq";

const URL = "http://localhost:3000/api/users/signup";

const signUpReq = async (user: UserInterface) => {
  try {
    await axios.post(URL, user);
    const login = await loginReq(user);
    return login;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default signUpReq;
