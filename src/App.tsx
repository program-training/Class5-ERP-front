import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Header from "./features/layout/components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apollo-client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
