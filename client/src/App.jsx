import React from "react";
import Login from "./components/Login";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:6969/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
