import React from 'react';
import {Link} from 'react-router-dom';

const NavBarComponent = ({}) =>
    <nav className="navbar sticky-top bg-light">
        <Link to="/" className="navbar-brand">
            Home
</Link>
        <Link to="/profile" className="nav-link nav-item navbar-nav">
            Profile
</Link>
        <Link to="/login" className="nav-link nav-item">
            Login
</Link>
<Link to="/recipes" className="nav-link nav-item">
            Search
</Link>
        <form className="form-inline float-right">
            <input className="form-control mr-sm-2 wbdv-field wbdv-new-course"
                placeholder="Search for a recipe"></input>
            <button
                className="btn btn-outline-primary my-2 my-sm-0">
                <i className="fas fa-search"></i>
            </button>
        </form>
    </nav>

export default NavBarComponent