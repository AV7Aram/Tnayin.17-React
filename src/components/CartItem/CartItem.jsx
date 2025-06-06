import React, { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { FaTrash } from 'react-icons/fa';
import styles from './CartItem.module.css';
import CartControls from '../CartControls/CartControls';

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useContext(MyContext);
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

                <CartControls updateQuantity={updateQuantity} item={item} />

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