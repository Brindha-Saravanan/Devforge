// firstpage.js
import React from "react";
import './First.css';
import { Link } from 'react-router-dom';


function FirstPage() {
    return (
        <div classsName='outer'>
            <div className="main">
                <marquee className="marq">Welcome to <b><i>Devforge</i></b>, an innovative online assessment platform designed to fuel your learning journey in the world of technology. Dive into a diverse range of technical challenges, collaborate with peers, and embark on a rewarding journey of growth and skill enhancement. Join our vibrant community of learners today and take your coding skills to new heights!</marquee>
                {/* <img src={logo} className="logo" />
                <p className="title">DEVFORGE</p> */}
                <div className="img1">
                    <div className="con">
                        {/* <Link to="/login">Launch</Link> */}
                        <Link to="/login">
                            <button className="btn">Launch</button>
                        </Link>
                        <p>New to Devforge? Join us
                            <Link to="/signup">
                                <button className="now"><b>NOW</b></button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstPage;
