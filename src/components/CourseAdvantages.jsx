import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function CourseAdvantages (props){
    return (
        <section className="course-advantages">
        <div className="container">
        <h2 className="course-advantages-title">{props.courseAdvantagesTitle}</h2>
                <ul className="course-advantages-text no-li-style">
                   {props.courseAdvantagesList?.map((item, index) => (
                   <div key={index} className="course-advantages-item d-flex ">
                        <span className='course-advantages-item-digit d-flex'>{++index}</span>
                        <li className="course-advantages-item-text d-flex"> {item}</li>
                   </div>))}
                </ul>
                <Link className='decor' to="/subscribe"><Button className='course-advantages-button' variant="info">{props.courseAdvantagesButton}</Button>{' '}</Link>
            </div>
    </section>
    )
}

export default CourseAdvantages