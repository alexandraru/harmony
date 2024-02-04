import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Feedback (){
    return (
        <div className="container">
          <Carousel>
          <Carousel.Item interval={2000} className='feedback'>
            <img className='img-thumbnail img-fluid center-block d-block w-100' src='img/feedback1.jpg' alt="feedback photo"/>
          </Carousel.Item>
          <Carousel.Item interval={2000} className='feedback'>
          <img className='img-thumbnail img-fluid center-block d-block w-100"' src='img/feedback2.jpg' alt="feedback photo"/>
          </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Feedback