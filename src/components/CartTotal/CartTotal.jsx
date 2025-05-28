import React from 'react';
import styles from '../../pages/CartPage/CartPage.module.css';

const CartTotal = ({ items }) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <h2 className={styles.total}>
            Total amount: ${total.toFixed(2)}
        </h2>
    );
};

export default CartTotal;