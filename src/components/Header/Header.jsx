import { FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const { user, cartItems, logout } = useContext(MyContext)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">My Store</Link>
            </div>
            <nav className={styles.nav}>
                <Link to="/products">Products</Link>
                {user ? (
                    <>
                        <span className={styles.welcomeMsg}>Welcome, {user.firstName}</span>
                        <Link to={`/user/${user.id}`} className={styles.profileLink}>
                            Profile
                        </Link>
                        <button onClick={logout} className={styles.logoutButton}>
                            <FaSignOutAlt className={styles.logoutIcon} />
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login" className={styles.loginLink}>Login</Link>
                )}
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