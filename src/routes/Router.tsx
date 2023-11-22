import { Route, Routes } from "react-router-dom";
import ROUTES from "./RoutesModel";
import { SignIn } from "../features/users/login/LoginPage";
import { SignUp } from "../features/users/signUp/SignUp";
import InventoryPage from "../features/inventory/inventory/allProductsDisplay/page/InventoryPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path={ROUTES.login_page} element={<SignIn />} />
      <Route path={ROUTES.inventory} element={<InventoryPage />} />
      <Route path={ROUTES.sign_up} element={<SignUp />} />
      <Route path={ROUTES.ERROR} element={""} />
    </Routes>
  );
};

export default Router;
