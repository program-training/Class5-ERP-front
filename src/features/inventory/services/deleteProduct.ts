import axios from "axios";

const URL = "http://localhost:3000/api/inventory";

const deleteProduct = async (id: string | number) => {
  const token = localStorage.getItem("TOKEN");
  const response = await axios.delete(`${URL}/${id}`, {
    headers: {
      authorization: token,
    },
  });
  return await response.data[0];
};

export default deleteProduct;
