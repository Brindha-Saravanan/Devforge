import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Topics.css';
import { useNavigate } from "react-router-dom";

const Topics = () => {
    const location = useLocation();
    const username = location.state ? location.state.username : null;
    const navigate = useNavigate();
    return (
        <>
            {/* <NavBar /> */}
            <div className='top'>            
            <p className='welcome'>Welcome, {username}!</p> 
            <button  className="now"><Link to="/">Home</Link></button>
            </div>
            <div className='topics'>
                <Link> { navigate('/web', { state: { username: username } })}  Web Development</Link>
                <Link to="/cn">Computer Networking</Link>
                <Link to="/os">Operating Systems</Link>
                {/* <Link to="/main">Practice Code</Link> */}
            </div>
        </>
    );
}

export default Topics;
