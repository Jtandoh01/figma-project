// src/components/Signup.js
import React from 'react';
import './resources/Signup.css';

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Create An Account</h2>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <a href="/login"><button> Submit</button></a>
                <div className="signup-options">
                    <p>Already have an account? <a href="/login">Login</a></p>
                    <button className="microsoft-signup">Continue with Microsoft</button>
                    <button className="google-signup">Continue with Google</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
