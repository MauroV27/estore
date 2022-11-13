import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import axios from "axios";

const api = axios.create({baseURL: "http://localhost:3000", headers: {'Content-Type': 'application/json',}});
//, timeout: 1000, headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}

const getUsuario = (userId) => {
  api.get(`/user/${userId}`, {headers : {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'}}).then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
};

getUsuario(1)

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);


export default App;
