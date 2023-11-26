import axios from "axios";
import { adminProductInterface } from "../../interfaces/adminProductInterface";

const URL = "http://localhost:3000/api/inventory";

const updateProduct = async (
  newProduct: adminProductInterface,
  id: string | number
) => {
  const token = localStorage.getItem("TOKEN");
  const response = await axios.put(`${URL}/${id}`, newProduct, {
    headers: {
      authorization: token,
    },
  });
  return await response.data[0];
};

export default updateProduct;
