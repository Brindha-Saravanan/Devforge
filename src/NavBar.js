// NavBar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar({ username }) {
    return (
        <div className="NavBar">
            <p>{username && <p>Welcome {username}!</p>}<Link to="/">Home</Link></p>            
        </div>
    );
}

export default NavBar;
