import axios from "axios";
const serverBaseURL = import.meta.env.VITE_BASE_URL;

const URL = `${serverBaseURL}/inventory`;

const getProductsFromServer = async () => {
  const token = localStorage.getItem("ERP_TOKEN");
  const response = await axios.get(URL, {
    headers: { authorization: token },
  });
  return await response.data;
};

export default getProductsFromServer;
