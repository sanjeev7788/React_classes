import { useState } from "react";
import Logo from "./Components/Logo";
import "./Login.css";
import "./index.css";


function Login() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [userdata, setuserData] = useState({});



  function handleLogin() {
    const data = {
      name: name,
      password: pwd,
    };

    setuserData(data);
    console.log(data);
  }

  function signupForm(){
   window.location.href="/signup"

  }

  return (
    <div className="row">
      <Logo />

      <div className="column2">
        <div className="form-container">
          <center>
            <h3>Login Form</h3>
          </center>

          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
          <button type="button" className="signup-button" onClick={e=>signupForm()} >
            SIgnup
          </button>
          <div>
            <h2>{userdata.name}</h2>
            <h2>{userdata.password}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
