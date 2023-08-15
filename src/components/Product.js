import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProducts,
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/Store";
import "../styles/ProductManagement.css";

function Product() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log("handleAddToCart fired");
    dispatch(addToCart(product));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <br></br>
            <div className="product-details">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price}</span>
            </div>

            <div className="product-buttons">
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <div className="product-quantity">
                Quantity: {product.quantity}
                <br></br>
                <button
                  className="quantity-button"
                  onClick={() => handleIncrementQuantity(product.id)}
                >
                  +
                </button>
                <button
                  className="quantity-button"
                  onClick={() => handleDecrementQuantity(product.id)}
                >
                  -
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
