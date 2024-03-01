import React from 'react'
import './Destination.css'
import './Destination.scss'

// Imported Icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

// Importing images
import image1 from '../../Assets/images (1).jpg'

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

        <div className='secMenu'>
          <ul className='flex'>
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Cultures</li>
            <li>Nature</li>
            <li>Mountains</li>
            <li>Beach</li>
          </ul>
        </div>


        <div className='destinationContainer grid'>

          <div className='singleDestination'>
            <div className='imgDiv'>
              <img src={image1} alt='Destination Image' />


              <div className='descInfo flex'>
                <div className='text'>
                  <spna className='name'>Pink Water</spna>
                  <p className='flex'><TiLocation className='icon' />
                    {/* People bath here as they believe this cleansing ritual will 
                    help them fight off bad luck and evil spirits. Some dip 
                    their swollen feet into the pool, as there is a belief
                    that the water can healing any ailments. */}
                    Port St Johns
                  </p>
                </div>
                <spna className='rating'>
                  4.5
                </spna>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Destination