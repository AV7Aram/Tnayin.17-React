import React from 'react';
import ProductCard from './ProductCard';
import styles from '../../pages/ProductsPage/ProductsPage.module.css';

const ProductGrid = ({ products }) => {
    return (
        <div className={styles.grid}>
            {products?.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;