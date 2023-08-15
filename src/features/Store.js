import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import React from "react";


const authSlice = createSlice({
  name: "auth",
  initialState:  { authenticated: false },
  reducers: {
    setUser: (state, action) => action.payload,
    logoutUser: (state) => {
      localStorage.removeItem("cart");
      state.authenticated = false;
      console.log(state.authenticated);
    },
    login: (state) => {
      state.authenticated = true; 
      console.log(state.authenticated);
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    updateCartItemQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.find((item) => item.id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
      console.log("addToCart fired");
      console.log(state);
      localStorage.setItem("cart", JSON.stringify(state));
      console.log(localStorage.getItem("cart"));
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const updatedCart = state.filter((product) => product.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
    clearCart: (state) => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

const productSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      name: "Bag",
      price: 10,
      image: "https://www.thegiftexpert.com/wp-content/uploads/2021/04/BP25XX-1.jpg",
      quantity: 0,
    },
    {
      id: 2,
      name: "Sneakers",
      price: 20,
      image: "https://n1.sdlcdn.com/imgs/g/0/i/Nike-Multi-Color-Casual-Shoes-SDL051199315-1-a2a35.JPG",
      quantity: 0,
    },
    {
      id: 3,
      name: "Watch",
      price: 15,
      image: "https://th.bing.com/th/id/R.3156abe964a68d9f8e392b7abf32071e?rik=Z90SvvH6eCROJg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-_uDoF9Qfhmg%2fUL-VM-S_YCI%2fAAAAAAAAAl8%2fF77syOS72gQ%2fs1600%2f187688_ts.jpg&ehk=RnPJOm%2bmbp0%2b%2fHU78GbunxFIIE2Zttcos5%2f1QH06u6A%3d&risl=&pid=ImgRaw&r=0",
      quantity: 0,
    },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((p) => p.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((p) => p.id === productId);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, name, price } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.price = price;
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { setUser, logoutUser,login} = authSlice.actions;
export const {
  addProduct,
  updateProduct,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;
export const { addToCart, clearCart, removeFromCart, updateCartItemQuantity } =
  cartSlice.actions;
const store = configureStore({
  reducer: {
    user: authSlice.reducer,
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const AuthProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export const selectUser = (state) => state.user;
export const selectProducts = (state) => state.products;

export default store;
