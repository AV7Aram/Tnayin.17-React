import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import styles from './CartControls.module.css'

const CartControls = ({ item, updateQuantity }) => {
    return (
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
    )
}

export default CartControls