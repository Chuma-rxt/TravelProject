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
import image2 from '../../Assets/Mossel-Bay.jpg'
import image3 from '../../Assets/Amakhala.jpeg'
import image4 from '../../Assets/umtata-river.jpg'
import image5 from '../../Assets/Maclear.jpg'
import image6 from '../../Assets/Tsitsikama-forest.jpg'
import image7 from '../../Assets/Micato-safaris.jpg'
import image8 from '../../Assets/Rural1.jpg'
import image9 from '../../Assets/Bulungula.jpg'
import image10 from '../../Assets/hogsback.jpg'
import image0 from '../../Assets/3.-Msikaba-Bridge-CGI.jpg'

// Creating an array that is gonna hold all the data for the destinations
const destinations= [
  {
    id: 0,
    img: image0,
    name: 'Msikaba Bridge',
    location: 'Eastern Cape',
    rating: 3.7
  },
  {
    id: 1,
    img: image1,
    name: 'Port St Johns',
    location: 'Eastern Cape',
    rating: 4.7
  },
  {
    id: 2,
    img: image2,
    name: 'Mossel Bay',
    location: 'Eastern Cape',
    rating: 4.8
  },
  {
    id: 3,
    img: image3,
    name: 'Amakhala',
    location: 'Eastern Cape',
    rating: 3.1
  },
  {
    id: 4,
    img: image4,
    name: 'Umtata',
    location: 'Eastern Cape',
    rating: 4.5
  },
  {
    id: 5,
    img: image5,
    name: 'Maclear',
    location: 'Eastern Cape',
    rating: 4.7
  },
  {
    id: 6,
    img: image6,
    name: 'Tsitsikama',
    location: 'Eastern Cape',
    rating: 4.7
  },
  {
    id: 7,
    img: image7,
    name: 'Micatos Safari',
    location: 'Eastern Cape',
    rating: 4.6
  },
  {
    id: 8,
    img: image8,
    name: 'Hlangani',
    location: 'Eastern Cape',
    rating: 3.7
  },
  {
    id: 9,
    img: image9,
    name: 'Bulunga',
    location: 'Eastern Cape',
    rating: 3.9
  },
  {
    id: 10,
    img: image10,
    name: 'Hongs Back',
    location: 'Eastern Cape',
    rating: 4.7
  },
  
];

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
          {destinations.map((destination) => {
            return (
              <div className='singleDestination' key={destination.id}>
              <div className='imgDiv'>
                <img src={destination.img} alt='Destination Image' />
  
  
                <div className='descInfo flex'>
                  <div className='text'>
                    <spna className='name'>{destination.name}</spna>
                    <p className='flex'><TiLocation className='icon' />
                      {/* People bath here as they believe this cleansing ritual will 
                      help them fight off bad luck and evil spirits. Some dip 
                      their swollen feet into the pool, as there is a belief
                      that the water can healing any ailments. */}
                      {destination.location}
                    </p>
                  </div>
                  <span className='rating'>
                    {destination.rating}
                  </span>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Destination