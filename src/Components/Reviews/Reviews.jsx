import React, {useEffect} from 'react'
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

import Aos from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='review section container'>
      <div className='secContainer grid'>
        <div className='textDiv'>
          <span className='redText' data-aos= 'fade-up'>FROM OUR CLIENTS</span>
          <h3 data-aos= 'fade-up'>Real Travel History From Our Beloved Clients</h3>
          <p data-aos= 'fade-up'>
            By choosing us as their tour agency, customers can expect an enriching and enjoyable travel
            experience, filled with unforgettable memories that will last a lifetime.
          </p>

          <span className='stars flex' data-aos= 'fade-up'>
          <AiFillStar className='icon'  />
          <AiFillStar className='icon'  />
          <AiFillStar className='icon'  />
          <AiFillStar className='icon'  />
          <AiFillStar className='icon'  />
          </span>

          <div className='clientsImages flex'>
            <img src={Image1} alt='Customer Image' data-aos= 'fade-up' />
            <img src={Image2} alt='Customer Image' data-aos= 'fade-up' />
            <img src={Image3} alt='Customer Image' data-aos= 'fade-up' />
            <img src={Image4} alt='Customer Image' data-aos= 'fade-up' />
          </div>
        </div>
        <div className='imgDiv'>
        <img src={Image5} alt='Customer Image' data-aos= 'fade-down' />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
