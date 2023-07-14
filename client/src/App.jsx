import React from "react";
import Login from "./components/login/Login";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
