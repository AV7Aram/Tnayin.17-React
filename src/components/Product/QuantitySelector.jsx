import React from 'react';
import styles from '../../pages/ProductDetailPage/ProductDetailPage.module.css';

const QuantitySelector = ({ quantity, setQuantity }) => {
    return (
        <div className={styles.quantity}>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
    );
};

export default QuantitySelector;