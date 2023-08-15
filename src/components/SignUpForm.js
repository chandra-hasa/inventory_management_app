import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/Store";
import { useNavigate } from "react-router-dom";
import '../styles/LoginForm.css'


const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = { username, isLoggedIn: true };
    dispatch(setUser(newUser));
    navigate("/dashboard");
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
