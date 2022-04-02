import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className='flex justify-around items-center p-4'>
            <div className='text-4xl font-medium text-orange-600'>
                <h1>LogoSection</h1>
            </div>
            <div className='text-xl'>
                <nav className=''>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-orange-600" : "text-orange-700"
                    } to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-orange-600" : "text-orange-700"
                    } to='/food-menu'>Menu</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-orange-600" : "text-orange-700"
                    } to='/foods'>Foods</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-orange-600" : "text-orange-700"
                    } to='/orders'>Orders</NavLink>
                </nav>
            </div>
            <div className='text-orange-600 '>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Header;