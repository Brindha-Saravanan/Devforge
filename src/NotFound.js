import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Sorry</h1>
            <p>This page doesn't exists</p>
            <Link to="/">Back To The Home...</Link>
        </div>
    );
}

export default NotFound;