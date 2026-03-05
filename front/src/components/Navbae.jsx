import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-app'>
            <div className='header'>
                <p className='title'>Movie Night Picker</p>
                <h2>What is your fivorit movie</h2>
            </div>
            
            <div className='link'>
                <NavLink to="/Home"></NavLink>
            </div>
        </div>
        
        
    )
}
  
export default Navbar;
