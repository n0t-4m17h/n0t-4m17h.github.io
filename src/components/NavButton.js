import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

const ButtonStyles = styled.div`
    padding: 9px 20px;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;

    .btn--primary {
        background-color: black;
        color: yellow;
        border: 1px solid black;
    }

    .btn--outline {
        background-color: transparent;
        color: blue;
        padding: 8px 20px;
        border: 1px solid black;
        transition: all 0.3s ease-out;
    }

    .btn--medium {
        padding: 8px 20px;
        font-size: 20px;
    }

    .btn--large {
        padding: 12px 26px;
        font-size: 20px
    }

    .btn--medium:hover, btn--large:hover {
        background: red;
        color: black;
        transition: all 0.3s ease-out;
    }

`


const NavMenu = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/projects' className='buttonMenu'>
            <Button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
            >
                {children}
            </Button>
        </Link>
    )
}

// const TransHoverButton = styled(Button)(({ theme }) => ({
// }));

const Buttons = {
    NavMenu,
    // Home,
    // Projects,
    // Utility
}

export default Buttons;