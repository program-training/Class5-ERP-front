import axios from "axios";

const serverBaseURL = import.meta.env.VITE_BASE_URL;

const URL = `${serverBaseURL}/inventory/products`;

const getUserProductsFromServer = async () => {
  try {
    const token = localStorage.getItem("ERP_TOKEN");
    const response = await axios.get(URL, {
      headers: { authorization: token },
    });
    return await response.data;
  } catch (error) {
    return "אין לך פה מוצרים יא אהבל";
  }
};

export default getUserProductsFromServer;
