import React, { useState } from "react";
import axios from "axios";
import "./login.css"

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
            <div className="container-fluid">
                <div className="form">


                    <form className="form" onSubmit={handleSubmit}>
                        <label className="form-label" htmlFor="rollNo">Username: </label>
                        <div className="input-group flex-nowrap">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" name="roll"
                                id="rollNo"
                                value={input.roll}
                                onChange={(e) => setInput({ ...input, roll: e.target.value })} />
                        </div>

                        <label className="form-label" htmlFor="password">Password: </label>
                        <div className="input-group flex-nowrap">
                        <input type="password" id="password"
                            name="password" className="form-control" aria-labelledby="passwordHelpBlock" value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })} />
                            </div>
                        <button type="submit" className="btn btn-outline-success">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login1;
