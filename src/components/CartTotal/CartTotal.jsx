import React from 'react';
import styles from './CartTotal.module.css';

const CartTotal = ({ items }) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className={styles.totalContainer}>
            <h2 className={styles.totalText}>
                Total Amount:
                <span className={styles.totalPrice}>${total.toFixed(2)}</span>
            </h2>
        </div>
    );
};

export default CartTotal;