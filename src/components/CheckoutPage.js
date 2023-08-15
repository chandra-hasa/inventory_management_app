import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../features/Store";
import "../styles/CheckoutPage.css";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();;
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    setCheckoutCompleted(true);
    setTimeout(() => {
      navigate("/products");
    }, 5000);
  };

  useEffect(() => {
    if (checkoutCompleted) {
      dispatch({ type: "cart/clearCart" });
    }
  }, [checkoutCompleted, dispatch]);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <ul className="checkout-list">
        {cartItems.map((item) => (
          <li key={item.id} className="checkout-item">
            <span className="checkout-item-name">{item.name}</span>
            <span className="checkout-item-price">${item.price}</span>
            <button
              className="remove-from-cart-button"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      )}
      {checkoutCompleted && (
        <p className="checkout-message">Thanks for shopping! Redirecting...</p>
      )}
    </div>
  );
};

export default CheckoutPage;
