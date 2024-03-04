import React from 'react';
import './Reviews.css';
import './Reviews.scss';

import { AiFillStar } from "react-icons/ai";

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
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
