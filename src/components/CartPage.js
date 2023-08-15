import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart,selectProducts} from '../features/Store';
import '../styles/CartPage.css';

const CartPage = () => {
    const products=useSelector(selectProducts)
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-price">${item.price}</span>
            <span className="cart-item-quantity">
              Quantity: {products.find((product) => product.id === item.id)?.quantity || 0}
            </span>
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
        <button className="clear-cart-button" onClick={handleClearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default CartPage;
