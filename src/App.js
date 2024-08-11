import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import ProductListing from './components/ProductListing';
import CheckoutPage from './components/CheckoutPage';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/products" element={<ProductListing/>} />
                <Route path="/checkout" element={<CheckoutPage/>} />
                <Route path="/admin" element={<AdminDashboard/>} />
            </Routes>
        </Router>
    );
}

export default App;
