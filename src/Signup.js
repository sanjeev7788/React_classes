import { useState } from "react";
import Logo from "./Components/Logo";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import Auth from "./Auth";
function Signup({value}) {
  
  return (
    <div className="row">
      <Logo />
      <Auth value={value}/>
    </div>
  );
}
export default Signup;
