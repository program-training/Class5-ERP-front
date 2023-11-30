import axios from "axios";
const serverBaseURL = import.meta.env.VITE_BASE_URL;

const URL = `${serverBaseURL}/inventory`;

const deleteProduct = async (id: string | number) => {
  const token = localStorage.getItem("ERP_TOKEN");
  const response = await axios.delete(`${URL}/${id}`, {
    headers: {
      authorization: token,
    },
  });
  return await response.data[0];
};

export default deleteProduct;
