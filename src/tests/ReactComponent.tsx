import { Provider } from "react-redux";
import { store } from "../redux/store";
import { BrowserRouter } from "react-router-dom";
interface Props {
  children: JSX.Element;
}
const RenderComponent = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
export default RenderComponent;
