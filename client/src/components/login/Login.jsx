import React, { useState } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const [userType, setUserType] = useState("student");
  const [input, setInput] = useState({
    roll: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    axios
      .post(
        "teacher/login",
        { input },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="form">
          <button
            className="btn btn-outline-primary"
            onClick={() => setUserType("teacher")}
          >
            {" "}
            Teacher{" "}
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setUserType("student")}
          >
            {" "}
            Student{" "}
          </button>

          <form className="form-control" onSubmit={handleSubmit}>
            <label className="text-successs" htmlFor="rollNo">
              Username:{" "}
            </label>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                name="roll"
                id="rollNo"
                value={input.roll}
                onChange={(e) => setInput({ ...input, roll: e.target.value })}
              />
            </div>

            <label className="text-successs" htmlFor="password">
              Password:{" "}
            </label>
            <div className="input-group flex-nowrap">
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
                aria-labelledby="passwordHelpBlock"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;