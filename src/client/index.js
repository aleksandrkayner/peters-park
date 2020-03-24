// DONT TOUCH THIS!
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./store";
import Park from "./components/Park";
import AllCats from "./components/AllCats";
import CatCard from "./components/CatCard";
import DisconnectedAllCats from "./components/AllCats";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <Park />
      <AllCats />
      <CatCard />
      <DisconnectedAllCats />
    </Router>
  </Provider>,
  document.getElementById("app")
);
