import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/common/Loader";
import { AuthProvider } from "./features/Store";
import CartPage from "./components/CartPage";
import ProductManagement from "./components/ProductManagement";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import CheckoutPage from "./components/CheckoutPage";
import Home from "./components/Home";
import ProductForm from "./components/ProductForm";
import NavigationBar from "./components/common/NavigationBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <AuthProvider>
          <Router>
            <div>
              <NavigationBar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route
                  path="/dashboard"
                  exact
                  element={<ProductManagement />}
                />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/products/add" element={<ProductForm />} />
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
