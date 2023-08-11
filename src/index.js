import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers"; // index.js where I combine the reducers
import middleware from "./middleware"; // index.js inside the middleware folder
//import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
);