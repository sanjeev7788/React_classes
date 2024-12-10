import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Auth({ value }) {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");

  const [userdata, setuserData] = useState([]);
  const [userdata1, setuserData1] = useState([]);

  const navigate = useNavigate();

  function handleLogin() {
    const data = {
      name: name,
      password: pwd,
    };

    setuserData(data);

    if (data.name.length > 0 && data.password.length > 0) {
      setuserData(data);
      navigate("/home");
    }
  }

  function handleSignup() {
    const data1 = {
      name: name,
      email: email,
      password: pwd,
    };

    if (
      data1.name.length > 0 &&
      data1.email.length > 0 &&
      data1.password.length > 0
    ) {
      setuserData(data1);
      navigate("/");
    }
  }

  return (
    <div className="column2">
      <div className="form-container">
        <center>{value ? <h3>Login form</h3> : <h3>Signup form</h3>}</center>

        <div className="input-box">
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {!value && (
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <p>Forget password?</p>

        <button
          type="button"
          className="login-button"
          onClick={(e) => handleLogin()}
        >
          Login
        </button>
        <button
          type="button"
          className="signup-button"
          onClick={(e) => handleSignup()}
        >
          SIgnup
        </button>
        <div>
          {/* <h2>{userdata.name}</h2>
          <h2>{userdata.password}</h2> */}
        </div>
      </div>
    </div>
  );
}
