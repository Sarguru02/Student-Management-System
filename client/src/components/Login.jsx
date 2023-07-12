import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [input, setInput] = useState({
    roll: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    axios.get("/login");
    console.log(input);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rollNo">Username: </label>
        <input
          type="text"
          name="roll"
          id="rollNo"
          value={input.roll}
          onChange={(e) => setInput({ ...input, roll: e.target.value })}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
