import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductManagement.css";
import Product from "./Product";
import CartPage from "./CartPage";

const ProductManagement = () => {
  const navigate = useNavigate();

  const handleManageProducts = () => {
    navigate("/products/add");
  };

  return (
    <div className="product-management">
      <h2>Products Available</h2>
      <Product/>
      <CartPage/>
      {/* <button className="manage-products-button" onClick={handleManageProducts}>
        Manage Products
      </button> */}
    </div>
  );
};

export default ProductManagement;
