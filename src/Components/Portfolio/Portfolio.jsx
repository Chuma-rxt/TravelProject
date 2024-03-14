import React from 'react'
import './Portfolio.css'
import './Portfolio.scss';

import icon1 from '../../Assets/icon1.jpg'
import icon2 from '../../Assets/destination1.jpg'
import icon3 from '../../Assets/7d0e6ce6ff877a4d4cbc7f2349a0a428.jpg'
import image from '../../Assets/Untitled design.png';

const Portfolio = () => {
  return (
    <div className='portfolio section container'>
      <div className='secContainer grid'>
        <div className='leftContent'>
          <div className='secHeading'>
            <h3>Why Should You Choose Us</h3>
            <p>
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>

          <div className='grid'>
            <div className='singlePortfolio flex'>
              <div className='iconDiv'>
                <img src={icon1} alt='Icon Image' />
              </div>

              <div className='infor'>
                <h4>Safety and Support</h4>
                <p>
                 The security and welfare of our customers come first.
                 Throughout the tour, we have emergency backup available
                 and uphold strict safety requirements.
                </p>
              </div>

            </div>

            <div className='singlePortfolio flex'>
              <div className='iconDiv'>
                <img src={icon2} alt='Icon Image' />
              </div>

              <div className='infor'>
                <h4>Diverse Range of Destination</h4>
                <p>
                 We offer a wide selection of sites to accommodate a 
                 variety of interests and tastes, whether it's a domestic
                 tour or an international excursion.
                </p>
              </div>
            </div>

            <div className='singlePortfolio flex'>
              <div className='iconDiv'>
                <img src={icon3} alt='Icon Image' />
              </div>

              <div className='infor'>
                <h4>24/7 Customer Support</h4>
                <p>
                 Before, during, and after the trip, our committed customer 
                 support team is available around-the-clock to answer any 
                 questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='rightContent'>
          <img src={image} alt='Image' />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;