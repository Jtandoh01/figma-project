// src/components/Homepage.js
import React from 'react';
import './resources/Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="sidebar">
                <div className="logo">GadgetGroove</div>
                <ul className="menu">
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Save</li>
                    <li>Cart</li>
                    <li>Selling</li>
                    <li>Profile</li>
                    <li>Purchase History</li>
                    <li>Contact</li>
                    <li>Settings</li>
                </ul>
                <div className="support">
                    <button className="customer-service">Support</button>
                </div>
            </div>
            <div className="main-content">
                <div className="top-bar">
                    <input type="text" placeholder="Search Product" className="search-bar" />
                    <div className="icons">
                        <span className="icon">🔔</span>
                        <span className="icon">📧</span>
                        <span className="profile-icon">👤</span>
                    </div>
                </div>
                <div className="featured-product">
                    <img src="./iphone.jpeg" alt="iPhone 15 Pro Max" />
                    <div className="product-details">
                        <h2>Apple iPhone 15 Pro Max</h2>
                        <p>Price: GHC 11,985</p>
                        <p>Color: Red, Blue, Green, Purple, Black, White</p>
                        <button>Add to cart</button>
                        <button>Buy now</button>
                    </div>
                </div>
                <div className="product-list">
                    {/* Product items here */}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
