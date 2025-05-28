import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuantitySelector from '../../components/Product/QuantitySelector';
import styles from './ProductDetailPage.module.css';

const ProductDetailPage = ({ addToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                return response.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className={styles.container}>Loading...</div>;
    }
    if (error) {
        return <div className={styles.container}>Error: {error}</div>;
    }
    if (!product) {
        return <div className={styles.container}>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        navigate('/cart');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{product.title}</h1>
            <img src={product.image} alt={product.title} className={styles.image} />
            <p className={styles.price}>Price: ${product.price}</p>
            <p className={styles.description}>{product.description}</p>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <button className={styles.addToCart} onClick={handleAddToCart}>Add to cart (${(product.price * quantity).toFixed(2)})</button>
        </div>
    );
};

export default ProductDetailPage;