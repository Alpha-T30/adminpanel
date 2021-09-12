import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthContextProvider } from "./Context_Api/AuthContext/AuthContext";
import { ListContextProvider } from "./Context_Api/ListContext/ListContext";
import { MovieContextProvider } from "./Context_Api/movieContext/MovieContaxt";

ReactDOM.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <ListContextProvider>
        <App />
      </ListContextProvider>
    </MovieContextProvider>
  </AuthContextProvider>,

  document.getElementById("root")
);
