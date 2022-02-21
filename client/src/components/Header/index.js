import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

    return (
        <header>
            <div>
                <Link to="/" className="text-decoration-none text-body">
                    <h1>The Dash</h1>
                </Link>
                <p className="d-flex align-items-center">The Dash is a blog for fans, friends and family to remember the dashes of famous musicians and singers who have passed away. Whether or not the death was recent, you can comment on the story of the person who made an impact on you by their music. The name is inspired on the poem The Dash by Linda Ellis, who makes us think about how we suppose to live the years between our born and death.</p>
                <div className="double-border"></div>
                <div className="d-flex flex-row justify-content-between">
                    <span className="px-3 py-2 text-light">February 22th, 2022</span>
                <nav className="d-flex flex-row justify-content-end">
                    {Auth.loggedIn() ? (
                        <>
                            {/* <Link to="/profile">Me</Link> */}
                            <a href="/" className="px-3 py-2 text-uppercase" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                    <>
                        <Link to="/login" className="px-3 py-2 text-uppercase">Login</Link>
                        <Link to="/signup" className="px-3 py-2 text-uppercase">Signup</Link>
                    </>
                    )}
                </nav>
                </div>

                <div className="double-border"></div>
            </div>
        </header>
    )
};

export default Header;