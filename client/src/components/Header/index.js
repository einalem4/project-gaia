import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return(
        <header className='w.100 flex-row justify-space-between align-center'>
            <Link to="/">
                <h1>Project Gaia</h1>
            </Link>

            <nav className="text-center">
                <Link to="/profile">Profile</Link>
                <a href="/" onClick={logout}>
                    Logout
                </a>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
        </header>
    );
};

export default Header;