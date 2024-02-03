import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Course (props){
    return (
        <section className="course-about">
            <div className="container">
                {props.text.map((el, index) => (
                <div key={index} className="course-about-box">
                    <h2 className="course-about-title">{el.courseAboutTitle}</h2>
                    <p className="course-about-text"> {el.courseAboutText}</p>
                    <Link className="menu decor" to="/challenge"><Button variant="info">{el.courseAboutButton}</Button>{' '}</Link>
                </div>))}
            </div>
        </section>
    )
}

export default Course