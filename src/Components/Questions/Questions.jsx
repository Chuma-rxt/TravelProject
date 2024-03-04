import React from 'react'
import './Questions.css'

const Questions = () => {
  return (
    <div className='questions section container'>
      <div className='secHeading'>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className='secContainer grid'>
        <div className='according grid'></div>

        <div className='form'>
          <div className='secHeading'>
            <h4>Do you have any specific question?</h4>
            <p>
              Please fill the form below and our dedicated team will get intouch
              with you as soon as possible.
            </p>
         </div>  
        </div>
      </div>
    </div>
  )
}

export default Questions