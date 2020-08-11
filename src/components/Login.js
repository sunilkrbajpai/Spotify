import React from "react";
import "../assets/css/Login.css";
import { accessUrl } from "./spotify";
import logo from "../assets/images/logo.gif";
function Login() {
  return (
    <div className="login">
      <img src={logo} alt="" />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
