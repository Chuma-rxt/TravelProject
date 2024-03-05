import React from 'react'
import './Footer.css'

// importing Icons
import { FaCarTunnel } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>
          <div className='footerLogo'>
          <FaCarTunnel />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer