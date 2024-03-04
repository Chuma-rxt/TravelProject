import React from 'react'
import './Questions.css'
import './Questions.scss'
import Accordion from './Accordion';

const Questions = () => {
  return (
    <div className='questions section container'>
      <div className='secHeading'>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className='secContainer grid'>
        <div className='accordion grid'>
          <Accordion />
          <Accordion />
        </div>

        <div className='form'>
          <div className='secHeading'>
            <h4>Do you have any specific question?</h4>
            <p>
              Please complete the form below, and a member of our
              committed team will contact you as soon as possible.
            </p>
         </div>

         <div className='formContent grid'>
          <input type='email' placeholder='Enter email address' />
          <textarea placeholder='Enter your question here'></textarea>
          <button className='btn'>Submit Inquiry</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Questions