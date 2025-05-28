import React from 'react';
import styles from '../../pages/CartPage/CartPage.module.css';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
    return (
        <div className={styles.item}>
            <img src={item.image} alt={item.title} />
            <div className={styles.itemDetails}>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <div className={styles.quantity}>
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button className={styles.remove} onClick={() => removeFromCart(item.id)}>Delete</button>
            </div>
        </div>
    );
}

export default CartItem