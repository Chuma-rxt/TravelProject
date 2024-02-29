import React from 'react';
import './Navbar.css';
import './Navbar.scss';

// Imported Icons
import { RiBusLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='logoDiv'>
       <RiBusLine className='icon' />
       <span>Chuma.R-Trips</span>
      </div>

      <div className='menu'>
        <ul>
          <li className='navList'>
            Destination
          </li>
          <li className='navList'>
            About Us
          </li>
          <li className='navList'>
            Testimonial
          </li>
          <li className='navList'>
            Gallery
          </li>
        </ul>

        {/* icons to remove navbar */}
        <AiFillCloseCircle className='icons' />
      </div>

      <button className='signUpBtn btn'>Sign Up</button>

      <PiDotsNineBold className='icon' />
       
    </div>
  )
}

export default Navbar;
