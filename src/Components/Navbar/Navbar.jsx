import React, {useState} from 'react';
import './Navbar.css';
import './Navbar.scss';

// Imported Icons
import { RiBusLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {

  const [navBar, setNavBar] = useState("menu");
  // Function to show NavBar
  const showNavBar = () =>{
    setNavBar(" menu showNavBar");
  }


  // Function to remove NavBar
  const removeNavBar = () =>{
    setNavBar(" menu ");
  }





  return (
    <div className='navBar'>
      <div className='logoDiv'>
       <RiBusLine className='icon' />
       <span>Chuma.R-Trips</span>
      </div>

      <div className={navBar}>
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
        <AiFillCloseCircle className='icons closeIcon' onClick={removeNavBar} />
      </div>

      <button className='signUpBtn btn'>Sign Up</button>

      <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
       
    </div>
  )
}

export default Navbar;
