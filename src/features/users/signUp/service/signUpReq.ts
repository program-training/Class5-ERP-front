import axios from "axios";
import { UserInterface } from "../../interface/userInterface";
const serverBaseURL = import.meta.env.VITE_BASE_URL;

const URL = `${serverBaseURL}/users/signup`;

const signUpReq = async (user: UserInterface) => {
  try {
    const userData = (await axios.post(URL, user)).data;
    return userData;
  } catch (error) {
    return Promise.reject(error);
  }
};
export default signUpReq;
