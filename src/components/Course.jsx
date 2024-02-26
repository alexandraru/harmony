import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Course ({courseAboutTitle, courseAboutText, courseAboutButton}){
    return (
        <section className="course-about">
            <div className="container">
                <div className="course-about-box">
                    <h2 className="course-about-title">{courseAboutTitle}</h2>
                    <p className="course-about-text"> {courseAboutText}</p>
                    <Link className="menu decor" to="/challenge"><Button variant="info">{courseAboutButton}</Button>{' '}</Link>
                </div>
            </div>
        </section>
    )
}

export default Course