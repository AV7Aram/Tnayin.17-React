import React from 'react';
import styles from './CartPage.module.css';
import CartItem from '../../components/CartItem/CartItem';
import CartTotal from '../../components/CartTotal/CartTotal';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Basket</h1>
            {cartItems.length === 0 ? (
                <p className={styles.empty}>Your cart is empty</p>
            ) : (
                <div>
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