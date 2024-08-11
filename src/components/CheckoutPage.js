import React from 'react';
import './resources/CheckoutPage.css';

function CheckoutPage() {
    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <div className="payment-methods">
                <h3>Payment Method</h3>
                <select>
                    <option value="momo">MOMO</option>
                    <option value="bank-transfer">Bank Transfer</option>
                    {/* Add more payment methods */}
                </select>
                <div className="card-options">
                    <div>
                        <input type="radio" name="card" id="mastercard" />
                        <label htmlFor="mastercard">MasterCard</label>
                    </div>
                    <div>
                        <input type="radio" name="card" id="visa" />
                        <label htmlFor="visa">Visa</label>
                    </div>
                    <button>Add New Card</button>
                </div>
            </div>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <p>Product: HarmonyTone</p>
                <p>Total: GHS 81.00</p>
                <button>Pay Now</button>
            </div>
        </div>
    );
}

export default CheckoutPage;
