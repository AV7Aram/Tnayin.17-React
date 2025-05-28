import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductSlider from '../../components/Product/ProductSlider';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(data => setFeaturedProducts(data));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to My Store</h1>
            <ProductSlider products={featuredProducts} />
        </div>
    );
};

export default HomePage;