import React from 'react'


// importing icons
import { BsArrowDownCircle } from "react-icons/bs";

const Accordion = () => {
  return (
    <div className='accordionContainer'>
      <span className='title flex'>
          How do I choose the right travel destination for me?

          <BsArrowDownCircle className='icon' />

      </span>
    </div>
  )
}

export default Accordion