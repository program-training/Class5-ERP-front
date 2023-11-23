import axios from "axios";

const URL = "http://localhost:3000/api/inventory";

const getProductFromServer = async () => {
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

export default getProductFromServer;
