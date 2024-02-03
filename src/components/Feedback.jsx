import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Feedback (){
    return (
        <div className="container">
          <Carousel>
          <Carousel.Item interval={2000}>
            <img className='feedback' src='img/feedback1.jpg' alt="feedback photo"/>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
          <img className='feedback' src='img/feedback2.jpg' alt="feedback photo"/>
          </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Feedback