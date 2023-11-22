import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Header from "./features/layout/components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
