import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/Store';
import '../styles/ProductForm.css';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName && productPrice && productImage) {
      const newProduct = {
        id: Math.random(),
        name: productName,
        price: parseFloat(productPrice),
        image: productImage,
      };
      dispatch(addProduct(newProduct));
      setProductName('');
      setProductPrice('');
      setProductImage('');
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add New Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label htmlFor="product-price">Product Price:</label>
        <input
          type="number"
          id="product-price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />

        <label htmlFor="product-image">Product Image URL:</label>
        <input
          type="text"
          id="product-image"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />

        <button type="submit" className="add-product-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
