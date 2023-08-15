import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/Store";
import "../../styles/Navbar.css";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const authenticated = useSelector((state) => state.user.authenticated);
  console.log(authenticated);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
       SHOP-KART
      </Link>
      {authenticated ? (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      ):(
        <button className="logout-button">
          Signup
        </button>
      )}
    </nav>
  );
};

export default NavigationBar;
