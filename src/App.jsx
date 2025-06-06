import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, CartPage, ProductDetailPage, ProductsPage, LoginFormPage, RegisterPage, UserInfoPage } from './pages';

import { useLocalStorage } from './hooks/useLocalStorage';
import { useAuth } from './hooks/useAuth';

import { MyContext } from './context/MyContext';

import Layout from './components/Layout/Layout';

function App() {
  const [cartItems, setCartItems] = useLocalStorage('cart', []);
  const { user, users, login, register, logout } = useAuth();
  const [loginError, setLoginError] = useState("");

  const clearCart = () => {
    setCartItems([]);
  };

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <MyContext.Provider value={{
      cartItems,
      setCartItems,
      user,
      users,
      login,
      register,
      logout,
      loginError,
      setLoginError,
      clearCart,
      addToCart,
      updateQuantity,
      removeFromCart,
    }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/login' element={<LoginFormPage />} />
          <Route path="/user/:id" element={<UserInfoPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;