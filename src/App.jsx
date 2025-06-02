import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, CartPage, ProductDetailPage, ProductsPage, LoginFormPage, RegisterPage, UserInfoPage } from './pages';

import { useLocalStorage } from './hooks/useLocalStorage';
import { useAuth } from './hooks/useAuth';

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
    <Routes>
      <Route path="/" element={<Layout cartItems={cartItems} clearCart={clearCart} onLogout={logout} user={user} />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart}  />} />
        <Route path='/login' element={<LoginFormPage onLogin={login} loginError={loginError} loginSuccess={!!user} users={users} />} />
        <Route path="/user/:id" element={<UserInfoPage />} />
        <Route path='/register' element={<RegisterPage onRegister={register} />} />
      </Route>
    </Routes>
  );
}

export default App;