import { useState } from "react";
import Logo from "./Components/Logo";
import "./Signup.css";
function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();

  const [signupData, setSignupdata] = useState({});
  function handleSignup() {
    const data = {
      name: name,
      email: email,
      password: pwd,
    };
    setSignupdata(data);
  }

  function LoginForm() {
    window.location.href = "/login";
  }
  return (
    <div className="row">
      <Logo />

      <div className="column2">
        <div className="form-container">
          <center>
            <h3>Signup Form</h3>
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
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <p>Login, if already registered.!</p>

          <button
            type="button"
            className="login-button"
            onClick={(e) => LoginForm()}
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
            <h4>{signupData.name}</h4>
            <h4>{signupData.email}</h4>
            <h4>{signupData.password}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
