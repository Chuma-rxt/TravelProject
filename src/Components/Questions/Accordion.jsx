import React from 'react'


// importing icons
import { BsArrowDownCircle } from "react-icons/bs";

const Accordion = () => {
  return (
    <div className='accordionContainer'>
      <span className='title flex'>
          How do I choose the right travel destination for me?
          <span>
          <BsArrowDownCircle className='icon' />
          </span>
      </span>
      <p className='description'>
       Think on your hobbies, spending limit, ideal experiences,
       and preferred surroundings. Look at places that offer 
       attractions or activities you find intriguing and that fit your preferences.
      </p>
    </div>
  )
}

export default Accordion