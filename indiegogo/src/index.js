import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContextProvider } from "./Context/AppContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <AppContextProvider>
    <Router>
      <App />
    </Router>
  </AppContextProvider>,
  document.getElementById("root")
);
