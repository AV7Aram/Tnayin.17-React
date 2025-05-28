import React, { useState, useEffect } from 'react';
import ProductGrid from '../../components/Product/ProductGrid';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load products');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={styles.container}>Loading products...</div>;
    }
    if (error) {
        return <div className={styles.container}>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Products</h1>
            <ProductGrid products={products} />
        </div>
    );
};

export default ProductsPage;