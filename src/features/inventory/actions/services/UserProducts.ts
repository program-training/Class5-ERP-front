import axios from "axios";

const URL = "http://localhost:3000/api/inventory/products";

const getUserProductsFromServer = async () => {
  try {
    const token = localStorage.getItem("TOKEN");
    const response = await axios.get(URL, {
      headers: { authorization: token },
    });
    return await response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
    } else {
      console.error("אין לך מוצרים פה יא אהבל");
    }
  }
};

export default getUserProductsFromServer;
