import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul className='nav'>
            <nav>
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/crimes'>Crimes</Link></li>
                <li><Link to='/crimepost'>Add A Crime Tip</Link></li>
                <li><Link to='/recommendations'>Recommendations</Link></li>
            </nav>
            </ul>
        </div>
    )
}

export default NavBar