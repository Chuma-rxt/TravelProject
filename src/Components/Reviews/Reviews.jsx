import React from 'react';
import './Reviews.css';
import './Reviews.scss';

// Impoting Icons
import { AiFillStar } from "react-icons/ai";


// Importing Images
import Image1 from '../../Assets/back.jpg'
import Image2 from '../../Assets/ayabee.jpg'
import Image3 from '../../Assets/Kivas.jpeg'
import Image4 from '../../Assets/Spee.jpeg'
import Image5 from '../../Assets/Winnie.jpeg'

const Reviews = () => {
  return (
    <div className='review section container'>
      <div className='secContainer grid'>
        <div className='textDiv'>
          <span className='redText'>FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an enriching and enjoyable travel
            experience, filled with unforgettable memories that will last a lifetime.
          </p>

          <span className='stars flex'>
          <AiFillStar className='icon'  />
          <AiFillStar className='icon'  />
          <AiFillStar className='icon'  />
          <AiFillStar className='icon'  />
          <AiFillStar className='icon'  />
          </span>

          <div className='clientsImages flex' >
            <img src={Image1} alt='Customer Image' />
            <img src={Image2} alt='Customer Image' />
            <img src={Image3} alt='Customer Image' />
            <img src={Image4} alt='Customer Image' />
          </div>
        </div>
        <div className='imgDiv'>
        <img src={Image5} alt='Customer Image' />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
