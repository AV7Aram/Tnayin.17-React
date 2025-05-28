import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './CartPage.module.css';
import CartItem from '../../components/CartItem/CartItem';
import CartTotal from '../../components/CartTotal/CartTotal';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <button
                className={styles.backButton}
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft className={styles.arrowIcon} />
                Go Back
            </button>

            <h1 className={styles.title}>Basket</h1>

            {cartItems.length === 0 ? (
                <p className={styles.empty}>Your cart is empty</p>
            ) : (
                <div className={styles.itemsContainer}>
                    {cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                        />
                    ))}
                    <CartTotal items={cartItems} />
                </div>
            )}
        </div>
    );
};

export default CartPage;