import { Route, Routes } from "react-router-dom";
import ROUTES from "./RoutesModel";
import LogIn from "../features/users/login/LoginPage";
import SignUp from "../features/users/signUp/SignUp";
import InventoryPage from "../features/inventory/pages/InventoryPage";
import ErrorPage from "../features/general/pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<InventoryPage />} />
      <Route path={ROUTES.login_page} element={<LogIn />} />
      <Route path={ROUTES.sign_up} element={<SignUp />} />
      <Route path={ROUTES.ERROR} element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
