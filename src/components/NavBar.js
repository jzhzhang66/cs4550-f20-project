import React from 'react';
import {Link} from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = ({}) =>
    <nav className="navbar sticky-top bg-light nav-styling">
        <Link to="/" className="nav-link nav-item navbar-nav text-styling">
            Home
        </Link>
        <Link to="/profile" className="nav-link nav-item navbar-nav text-styling">
            Profile
        </Link>
        <Link to="/login" className="nav-link nav-item text-styling">
            Login
        </Link>
        <Link to="/search" className="nav-link nav-item text-styling">
            Search
        </Link>
    </nav>

export default NavBar
