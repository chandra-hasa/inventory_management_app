import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser,login } from "../features/Store";
import { useNavigate } from "react-router-dom";
import '../styles/LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      const user = { username, isLoggedIn: true };
      dispatch(setUser(user));
      dispatch(login())
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
