import logo from './img/profile.jpeg';
import './profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className="Profile">

            <div className="container">
                <div className="user-profile">
                    <div className="user-image">
                        <img src={logo} alt="User Image" />
                    </div>
                    <div className="user-details">
                        <input type="text" id="username" name="username" value="Sahana" readOnly />
                        <input type="text" id="age" name="age" value="20" readOnly />
                        <input type="text" id="qualification" name="qualification" value="B.Tech ADS" readOnly />
                        <div className="container1">
                            <div>
                                <h3>PROBLEMS SOLVED</h3>
                                <input type="text" className="textbox" value="150" readOnly />
                            </div>
                            <div>
                                <h3>POINTS SCORED</h3>
                                <input type="text" className="textbox" value="1200" readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div >
    );
}

export default Profile;