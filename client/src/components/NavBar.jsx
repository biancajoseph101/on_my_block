import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/'>Home</Link>
                <Link to='/crimes'>Crimes</Link>
                <Link to='/recommendations'>Recommendations</Link>
            </nav>
        </div>
    )
}

export default NavBar