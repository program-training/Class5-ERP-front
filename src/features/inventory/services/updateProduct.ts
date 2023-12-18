import axios from "axios";
import { adminProductInterface } from "../interfaces/adminProductInterface";
const serverBaseURL = import.meta.env.VITE_BASE_URL;

const URL = `${serverBaseURL}/inventory`;

const updateProduct = async (
  newProduct: adminProductInterface,
  id: string | number
) => {
  const token = localStorage.getItem("ERP_TOKEN");
  const response = await axios.put(`${URL}/${id}`, newProduct, {
    headers: {
      authorization: token,
    },
  });
  return await response.data[0];
};

export default updateProduct;
