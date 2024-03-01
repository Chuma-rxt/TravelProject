import React from 'react'
import './Destination.css'
import './Destination.scss'

// Imported Icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const Destination = () => {
  return (
    <div className='destination section container'>
      <div className='secContainer'>

        <div className=''>
          <span className='redText'>EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Please fill in the fields below to find the best
             spot for your tour.
          </p>
        </div>

        <div className='searchField grid'>
          <div className='inputField flex'>
          <MdLocationPin className='icon' />
          <input type='text' placeholder='Location' />
          </div>

          <div className='inputField flex'>
          <BsFillCreditCardFill className='icon' />
          <input type='text' placeholder='Budget' />
          </div>

          <div className='inputField flex'>
          <BsFillCalendar2DateFill className='icon' />
          <input type='text' placeholder='Date' />
          </div>

          <button className='btn flex'>
          <BiSearchAlt className='icon' /> Search

          </button>
        </div>
      </div>

    </div>
  )
}

export default Destination