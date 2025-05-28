import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
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
                <Link to="/cart">Basket</Link>
            </nav>
        </header>
    );
};

export default Header;