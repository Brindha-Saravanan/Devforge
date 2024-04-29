import React from 'react';
import './Login.css';
import { FaUserAlt } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('no');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const user = { username: name, password: password }; // Correctly construct the user object
        fetch('https://devforgebackend-3.onrender.com/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user) // Send the user object directly
        }).then(response => {
            if (!response.ok) {
                throw new Error('Authentication failed'); // Throw an error if authentication fails
            }
            return response.json();
        }).then(data => {
            console.log("Login successful");
            setStatus('yes');
            // alert("Logged in successfully");
            navigate('/topics', { state: { username: name } }); // Pass username as state // Navigate to '/topics' upon successful login
        }).catch(error => {
            console.error("Login failed:", error);
            alert("Login failed. Please try again."); // Notify user about login failure
        });
    }
    
    return (
        <div className='outer'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type='text' placeholder='UserName' value={name} required onChange={(e) => {
                            setName(e.target.value)
                        }} />
                        <FaUserAlt className='icon' />
                    </div>
                    <div className="input-box">
                        <input type='password' placeholder='password' value={password} required onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <IoLockClosedSharp className='icon' />
                    </div>
                    <button type='submit'>Login</button>                
                    <div className="register-link">
                        <p>Don't have an Account ? <Link to="/signup">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
