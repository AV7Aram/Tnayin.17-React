import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, CartPage, ProductDetailPage, ProductsPage, LoginFormPage, RegisterPage, UserInfoPage } from './pages';

import Layout from './components/Layout/Layout';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);


  const [users, setUsers] = useState([
    { id: 1, firstName: 'Avet', lastName: '', email: 'avet@gmail.com', password: '1234' },
    { id: 2, firstName: 'Anna', lastName: '', email: 'anna@gmail.com', password: '1234' }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const handleRegister = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
    setShowModal(false);
  };

  const handleLogin = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setLoggedInUser(foundUser);
      setLoginError("");
    } else {
      setLoggedInUser(null);
      setLoginError("Incorrect username or password. ❌");
    }
  };

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
      <Route path="/" element={<Layout cartItems={cartItems} clearCart={clearCart} />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} f />} />
        <Route path='/login' element={<LoginFormPage onLogin={handleLogin} onOpenRegister={() => setShowModal(true)} loginError={loginError} loginSuccess={loggedInUser} users={users} />} />
        <Route path="/userinfo/:id" element={<UserInfoPage />} />
        <Route path='/register' element={<RegisterPage onRegister={handleRegister} />} />
      </Route>
    </Routes>
  );
}

export default App;