import axios from "axios";
import { adminProductInterface } from "../interfaces/adminProductInterface";
const serverBaseURL = import.meta.env.VITE_BASE_URL;


const URL = `${serverBaseURL}/api/inventory`;

const addProduct = async (newProduct: adminProductInterface) => {
  const token = localStorage.getItem("TOKEN");
  const response = await axios.post(URL, newProduct, {
    headers: {
      authorization: token,
    },
  });
  return await response.data[0];
};

export default addProduct;
