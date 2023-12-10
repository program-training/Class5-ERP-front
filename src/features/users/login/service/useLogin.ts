import { UserInterface } from "../../interface/userInterface";
import { useMutation } from "@apollo/client";
import { MUTATION_LOGIN_USER } from "../../../../apollo/queries-temporary-location/queries";

const useLogin = () => {
  const [login] = useMutation(MUTATION_LOGIN_USER)

  const loginReq = async (user: UserInterface) => {
    try {
      const response = await login({
        variables: {
          input: {
            email: user.email,
            password: user.password
          }
        }
      });
      
      const TOKEN = response.data.loginUser.resData.token;      
  
      localStorage.setItem("ERP_TOKEN", TOKEN);
      localStorage.setItem("erpUsername", user.email);
      return response.data;
    } catch (error) {
      console.error(error);
      
      return Promise.reject(error);
    }
  }

  return loginReq
};

export default useLogin;
