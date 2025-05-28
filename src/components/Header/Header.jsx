// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = ({ cartItems }) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">My Store</Link>
            </div>
            <nav className={styles.nav}>
                <Link to="/products">Products</Link>
                <span>Log In</span>
                <span>Support</span>
                <span>Shop</span>
                <Link to="/cart" className={styles.cartLink}>
                    <FaShoppingCart className={styles.cartIcon} />
                    {cartItems.length > 0 && (
                        <span className={styles.cartCount}>{cartItems.length}</span>
                    )}
                </Link>
            </nav>
        </header>
    );
};

export default Header;