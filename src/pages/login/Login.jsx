import React from 'react';
import { Link } from 'react-router-dom';
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className = "login">
        <div className="card">
            <div className="left">
                <h1>Hello!</h1>
                <p>Welcome to a social media app I am trying to create to understand more about React and fullstack developement</p>
                <span>Don't have an account?</span>
                <Link to = "/register">
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder = "UserName" />
                    <input type="password" placeholder = "Password" />
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login