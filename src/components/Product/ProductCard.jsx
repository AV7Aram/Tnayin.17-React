import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../pages/ProductsPage/ProductsPage.module.css';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`} className={styles.link}>Buy</Link>
        </div>
    );
};

export default ProductCard;