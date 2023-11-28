import axios from "axios";
const serverBaseURL = import.meta.env.VITE_BASE_URL;


const URL = `${serverBaseURL}/api/inventory`;

const getProductsFromServer = async () => {
  try {
    const token = localStorage.getItem("TOKEN");
    const response = await axios.get(URL, {
      headers: { authorization: token },
    });
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getProductsFromServer;
