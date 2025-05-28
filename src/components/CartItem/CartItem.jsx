import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './CartItem.module.css';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
    return (
        <div className={styles.item}>
            <img
                src={item.image}
                alt={item.title}
                className={styles.productImage}
            />
            <div className={styles.details}>
                <h3 className={styles.productTitle}>{item.title}</h3>
                <p className={styles.price}>Price: ${item.price}</p>

                <div className={styles.quantityControls}>
                    <button
                        className={styles.quantityButton}
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                        -
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                        className={styles.quantityButton}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                        +
                    </button>
                </div>

                <p className={styles.itemTotal}>
                    Total: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                    className={styles.removeButton}
                    onClick={() => removeFromCart(item.id)}
                >
                    <FaTrash className={styles.trashIcon} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;