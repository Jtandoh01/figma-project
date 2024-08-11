import React from 'react';
import './resources/ProductListing.css';

function ProductListing() {
    const products = [
        { name: 'Virtual Casque', price: 88, discount: '25%', imageUrl: '/path-to-image' },
        { name: 'Sonic Surge', price: 75, discount: '25%', imageUrl: '/path-to-image' },
        // ... add other products here
    ];

    return (
        <div className="product-listing">
            <div className="filters">
                {/* Add filters like category, price, rating, etc. */}
                <h3>Filters</h3>
                {/* Example filter components */}
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.name} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <div className="product-info">
                            <h4>{product.name}</h4>
                            <p>${product.price.toFixed(2)}</p>
                            <span className="discount">{product.discount}</span>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListing;
