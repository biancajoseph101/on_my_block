import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div>
            <ul className='nav'>
                <nav>
                    <Link to='/'><img className="navicon" src="/2A41CEFC-F12A-4F19-845F-B659F6230243.png"/></Link>
                    {
                        (props.authenticated) ? <li onClick={props.handleLogOut}>LogOut</li> : (
                            <>
                                <li><Link to='/signup'>Sign Up</Link></li>
                                <li><Link to='/login'>Log In</Link></li>
                            </>
                        )
                    }
                    <Link to='/crimes'><img className="navicon" src="/42BD28B9-8A58-4DD6-99F6-F8FCA1833A7C.png"/></Link>
                    <li><Link to='/crimepost'>Add A Crime Tip</Link></li>
                    <li><Link to='/recommendations'>Recommendations</Link></li>
                    <Link to='/about'><img className="navicon" src="/D74CCE2C-858D-4E2B-B27C-67B52FAAA14D.png"/></Link>

                </nav>

            </ul>
        </div>
    )

    }
export default NavBar
    
