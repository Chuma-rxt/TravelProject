import React from 'react'
import './Middle.css'
import './Middle.scss'

const Middle = () => {
  return (
    <div className='middle section'>
      <div className='secContainer container'>
        <div className='grid'>
          <spav className='flex'>
            <h1>10</h1>
            <p>
              World of Experiences
            </p>
          </spav>

          <spav className='flex'>
            <h1>2K+</h1>
            <p>
              Fine Destination
            </p>
          </spav>

          <spav className='flex'>
            <h1>5K+</h1>
            <p>
              Customer Reviews
            </p>
          </spav>

          <spav className='flex'>
            <h1>4.8</h1>
            <p>
              Overall Rating
            </p>
          </spav>

        </div>
      </div>
    </div>
  )
}

export default Middle