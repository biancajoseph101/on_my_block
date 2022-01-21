import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div>
            <ul className='nav'>
                <nav>
                    <Link to='/'><img className="navicon" src="/2A41CEFC-F12A-4F19-845F-B659F6230243.png"/></Link>
                    {
                        (props.authenticated) ? <li className="logoutnav" onClick={props.handleLogOut}>LogOut</li> : (
                            <>
                                <li><Link to='/signup'>Sign Up</Link></li>
                                <li><Link to='/login'>Log In</Link></li>
                            </>
                        )
                    }
                    <Link to='/crimes'><img className="navicon" src="/42BD28B9-8A58-4DD6-99F6-F8FCA1833A7C.png"/></Link>
                    <li><Link to='/crimepost'>Add A Crime Tip</Link></li>
                    <li><Link to='/recommendations'>Recommendations</Link></li>
                    <Link to='/about'><img className="navicon" src="/noun-about-3553599.png"/></Link>
                    <Link to='/safety'><img className="navicon" src="/A45C7024-07E5-47FD-BFC5-26DFCD165D32.png"/></Link>

                </nav>

            </ul>
        </div>
    )

    }
export default NavBar
