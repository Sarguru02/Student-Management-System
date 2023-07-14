import React from "react";
import Login from "./components/Login";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:6969/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
