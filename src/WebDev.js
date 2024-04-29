import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './webdev.css';

function WebDev() {
    const location = useLocation();
    console.log("Location state:", location.state); // Log location state to check if username is present
    const username = location.state ? location.state.username : null;

    return (
        <>
            <div className='top'>            
            {/* <p className='welcome'>Welcome, {username}!</p>  */}
            <button  className="now"><Link to="/">Home</Link></button>
            </div>
            <div className="close">
                <div className="card">
                    <h2>Frontend Development</h2>
                    <Link to="/frontend/html">HTML (Hypertext Markup Language)</Link>
                    <Link to="/frontend/css">CSS (Cascading Style Sheets)</Link>
                    <Link to="/frontend/javascript">JavaScript</Link>
                    <Link to="/ques">React.js</Link>
                    <Link to="/frontend/angular">Angular</Link>
                    <Link to="/frontend/vue">Vue.js</Link>
                    <Link to="/frontend/ember">Ember.js</Link>
                </div>
                <div className="card">
                    <h2>Backend Development</h2>
                    <Link to="/backend/node">Node.js</Link>
                    <Link to="/backend/express">Express.js</Link>
                    <Link to="/backend/django">Django (Python)</Link>
                    <Link to="/backend/rails">Ruby on Rails</Link>
                    <Link to="/backend/asp">ASP.NET</Link>
                </div>
                <div className="card">
                    <h2>Database Management</h2>
                    <Link to="/database/sql">SQL (Structured Query Language)</Link>
                    <Link to="/database/mysql">MySQL</Link>
                    <Link to="/database/postgresql">PostgreSQL</Link>
                    <Link to="/database/sqlite">SQLite</Link>
                    <Link to="/database/nosql">NoSQL</Link>
                    <Link to="/database/mongodb">MongoDB</Link>
                    <Link to="/database/firebase">Firebase</Link>
                    <Link to="/database/couchdb">CouchDB</Link>
                </div>
                {/* Add similar sections for other topics */}
                <div className="card">
                    <h2>Web Frameworks</h2>
                    <Link to="/web-frameworks/flask">Flask (Python)</Link>
                    <Link to="/web-frameworks/laravel">Laravel (PHP)</Link>
                    <Link to="/web-frameworks/spring">Spring Boot (Java)</Link>
                </div>
                <div className="card">
                    <h2>Version Control</h2>
                    <Link to="/version-control/git">Git</Link>
                    <Link to="/version-control/svn">SVN (Subversion)</Link>
                </div>
                <div className="card">
                    <h2>Web Servers</h2>
                    <Link to="/web-servers/apache">Apache</Link>
                    <Link to="/web-servers/nginx">Nginx</Link>
                </div>
                {/* Add more sections as needed */}
            </div>
        </>
    );
}

export default WebDev;
