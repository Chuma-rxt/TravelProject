import React from 'react'
import './Footer.css'
import './Footer.scss'

// importing Icons
import { FaCarTunnel } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>
          <div className='footerLogo'>
          <FaCarTunnel className='icon' />
          <span>Chuma.R-Trips</span>
          </div>

          <div className='socials flex'>
            <FaFacebook className='icon' />
            <FaInstagram className='icon'/>
            <FaTwitter className='icon'/>
          </div>

          <div className='footerLinks'>
            <span className='linkTitle'>
              Infomation
            </span>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Explore</a>
            </li>
            <li>
              <a href='#'>Travel</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </div>

          <div className='footerLinks'>
            <span className='linkTitle'>
              Helpful Links
            </span>
            <li>
              <a href='#'>Destination</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Travel & Conditions</a>
            </li>
            <li>
              <a href='#'>Destination</a>
            </li>
          </div>

          <div className='footerLinks'>
            <span className='linkTitle'>
              Contact Details
            </span>
            <span className='phone'>
             +27 7332 65346
            </span>
            <span className='email'>
              craxoti60@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer