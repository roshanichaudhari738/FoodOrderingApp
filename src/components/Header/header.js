import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import React from 'react';
import "../Style/Navbar.css";
import DvrIcon from '@mui/icons-material/Dvr';

function Header(){
    return(
        <div className='navbar'>
            <div className='leftside'>
                <div className='leftSide1'>
                <img src={logo} alt='Logo'/> 
                </div>
            </div> 
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <button>
                    <DvrIcon/>
                </button>
            </div>
        </div>
    )
}

export default Header