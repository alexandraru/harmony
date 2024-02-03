import React from 'react';
import { Element} from 'react-scroll';

function CourseOffer (props){
    return (
       <Element name='course' id='course' className="course-offer">
           {props.text.map((el, index) => ( 
           <div key={index} className="container">
            <h2 className="course-offer-title">{el.courseOfferTitle}</h2>
                <div className="course-offer-box d-flex align-c">
                <div className="course-offer-pictures">
                    <img src="img/course1.jpg" alt="photo1" className="course-offer-item"/>
                    <img src="img/course3.jpg" alt="photo2" className="course-offer-item"/>
                    <img src="img/course2.jpg" alt="photo3" className="course-offer-item"/>
                    <img src="img/course4.jpg" alt="photo4" className="course-offer-item"/>
                </div>
                    <ul className="course-offer-text">
                        {el.courseOfferList.map((item, index) => (<li key={index} className="course-offer-item">{item}</li>))}
                    </ul>
                </div>
            </div>))}
    </Element>
    )
}

export default CourseOffer