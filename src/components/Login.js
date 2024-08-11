// src/components/Login.js
import React from 'react';
import './resources/Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login Here</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="/signup"><button>Login</button></a>
                <div className="login-options">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    <button className="google-login">Continue with Google</button>
                    <button className="microsoft-login">Continue with Microsoft</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
