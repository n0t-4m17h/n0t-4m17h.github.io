import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import NavStyles from '../styles/NavStyle';
import PrisonMike from '../assets/images/prison-mike.jpg'

const Navbar = () => {

    return (
        <>
            <nav className='Navbar'>
                <NavStyles.NavContainer>
                    <Link to='/' className='NavbarLogo'> 
                        {/* AJK */}
                        <img src={PrisonMike} alt='AJK' style={{height: '35px',display: 'flex',  padding: '0.5rem 0rem',}}/>
                    </Link>   
                    <Link to='/utility' className='NavbarLogo'> 
                        Utility
                    </Link>   
                </NavStyles.NavContainer>
            </nav>
        </>
    );
}


export default Navbar;