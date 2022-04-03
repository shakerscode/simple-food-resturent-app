import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
 



const Header = () => {
    return (
        <div className='flex justify-around items-center p-4 shadow-lg '>
            <div className='text-4xl font-medium text-orange-600'>
                <h1>LogoSection</h1>
            </div>
            <div className='md:flex justify-center items-center text-xl'>       
                <CustomLink className='mr-7' to='/'>Home</CustomLink>
                <CustomLink className='mr-7' to='/food-menu'>Food Menu</CustomLink>
                <CustomLink className='mr-7' to='/orders'>Orders</CustomLink>
                <CustomLink className='mr-7' to='/shop'>Shop</CustomLink>
                <CustomLink className='mr-7' to='/blog'>Blog</CustomLink>
            </div>
            <div className='text-orange-600'>
                <FontAwesomeIcon className='mr-4 bg-orange-100 p-3 rounded-full' icon={faUser}></FontAwesomeIcon>
                <FontAwesomeIcon className='mr-4 bg-orange-100 p-3 rounded-full' icon={faCartShopping}></FontAwesomeIcon>
                <FontAwesomeIcon className='mr-4 bg-orange-100 p-3 rounded-full' icon={faSearch}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Header;