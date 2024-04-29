import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import './signup.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

const Signup = () => {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        const user = { username, password};
        fetch('https://devforgebackend-3.onrender.com/insertlogin', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log("Login stored");
        })
        const details = { username, email}; 
        fetch('https://devforgebackend-3.onrender.com/insertDetails', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details)
        }).then(() => {
            console.log("Details stored");
        })
    }

    return (
        <div className='wrappers'>
            <form onSubmit={handleSubmit}>
                <h1>SIGNUP</h1>
                <div className="input-box">
                    <input type='text' placeholder='UserName' value={username} required onChange={(e) => {
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
                <div className="input-box">
                    <input type='email' placeholder='Email-id' value={email} required onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <MdEmail className='icon' />
                </div>
                <button type="submit">REGISTER NOW</button>
                <div className="register-link">
                    <p>Already have an Account ? <Link to="/login"><b>Login</b></Link></p><br></br>
                </div>
            </form >
            <Link to="/"><button> HOME</button></Link>

        </div >
    )
}

export default Signup
