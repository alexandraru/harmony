import React from 'react';
import { Link } from 'react-router-dom'

function CourseForm (props){
    return (
        <section className="course-form">
          {props.text.map((el, index) => (
            <div key={index} className="container">
            <h2 className="course-form-title">{el.courseFormTitle}</h2>
                <div className="course-form-box align-c justify-sb">
                   {el.courseInfo.map((info, index) => ( 
                   <div key={index} className="course-form-info">
                       <div className='course-form-point'>
                           <h3 className='course-form-point-title'>{info.courseFormInfoTitle}</h3>
                       </div>
                        <p className="course-form-text">{info.courseFormInfoText}</p> 
                    </div>))}
                </div>
            </div>))}
        </section>
    )
}

export default CourseForm