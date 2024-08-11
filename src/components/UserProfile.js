import React from 'react';
import './resources/UserProfile.css';

function UserProfile() {
    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="profile-header">
                <img src="/path-to-profile-picture.png" alt="Profile" className="profile-pic" />
                <h3>Welcome Maame Afua</h3>
                <p>Want to change something about you? Do it here!</p>
            </div>
            <div className="profile-details">
                <p><strong>First Name:</strong> Akosua</p>
                <p><strong>Last Name:</strong> Agyapomaa</p>
                <p><strong>Email:</strong> akosuaaj@email.com</p>
                <p><strong>City:</strong> Accra</p>
                <p><strong>Address:</strong> University of Ghana</p>
                <p><strong>Tel:</strong> 0244444444</p>
            </div>
            <a href="/purchase-history" className="purchase-history-link">Click here to see your purchase history</a>
        </div>
    );
}

export default UserProfile;
