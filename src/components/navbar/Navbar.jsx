import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <>
        <div className="container d-flex justify-content-sm-around bg-light border p-3  ">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/contact-us'}>Contact Us</NavLink>
            <NavLink to={'/about-us'}>About Us</NavLink>
        </div>
        </>
    )
}

export default Navbar