// import React from 'react';
// import './resources/AdminDashboard.css';

// function AdminDashboard() {
//     return (
//         <div className="admin-dashboard">
//             <div className="admin-sidebar">
//                 <div className="sidebar-logo">GadgetGroove</div>
//                 <ul className="sidebar-menu">
//                     <li><a href="#dashboard" className="active">Dashboard</a></li>
//                     <li><a href="#products">Products</a></li>
//                     <li><a href="#orders">Orders</a></li>
//                     <li><a href="#users">Users</a></li>
//                     <li><a href="#settings">Settings</a></li>
//                     <li><a href="#help">Help</a></li>
//                 </ul>
//                 <a href="login"><button className="logout-button">Logout</button></a>
//             </div>
//             <div className="admin-main-content">
//                 <h2>Administrator Dashboard</h2>
//                 <div className="dashboard-stats">
//                     <div className="stat-card">
//                         <h3>Total Orders</h3>
//                         <p>87%</p>
//                         <p>4,802</p>
//                     </div>
//                     <div className="stat-card">
//                         <h3>Weekly Sales</h3>
//                         <p>15%</p>
//                         <p>GHS 25,000</p>
//                     </div>
//                     {/* Add more stat cards here */}
//                 </div>
//                 <div className="charts">
//                     <div className="chart">
//                         <h4>Weekly Discounted Sales</h4>
//                         {/* Insert your chart component or a placeholder */}
//                     </div>
//                     <div className="chart">
//                         <h4>Income vs Expenditure</h4>
//                         {/* Insert your chart component or a placeholder */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AdminDashboard;


import React from 'react';
import './resources/AdminDashboard.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoxIcon from '@mui/icons-material/Phone';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <div className="admin-sidebar">
                <a href="/" ><div className="sidebar-logo">GadgetGroove</div></a>
                <ul className="sidebar-menu">
                    <li><a href="#dashboard" className="active"><DashboardIcon className="icon" /> Dashboard</a></li>
                    <li><a href="#products"><BoxIcon className="icon" /> Products</a></li>
                    <li><a href="#orders"><ShoppingCartIcon className="icon" /> Orders</a></li>
                    <li><a href="#users"><PeopleIcon className="icon" /> Users</a></li>
                    <li><a href="#settings"><SettingsIcon className="icon" /> Settings</a></li>
                    <li><a href="#help"><HelpIcon className="icon" /> Help</a></li>
                </ul>
                <button className="logout-button"><ExitToAppIcon /> Logout</button>
            </div>
            <div className="admin-main-content">
                <h2>Administrator Dashboard</h2>
                <div className="dashboard-stats">
                    <div className="stat-card">
                        <h3>Total Orders</h3>
                        <p>87%</p>
                        <p>4,802</p>
                    </div>
                    <div className="stat-card">
                        <h3>Weekly Sales</h3>
                        <p>15%</p>
                        <p>GHS 25,000</p>
                    </div>
                </div>
                <div className="charts">
                    <div className="chart">
                        <h4>Weekly Discounted Sales</h4>
                        {/* Insert your chart component or a placeholder */}
                    </div>
                    <div className="chart">
                        <h4>Income vs Expenditure</h4>
                        {/* Insert your chart component or a placeholder */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
