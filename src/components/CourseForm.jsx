import React from 'react';

function CourseForm (props){
    return (
        <section className="course-form">
            <div className="container">
            <h2 className="course-form-title">{props.courseFormTitle}</h2>
                <div className="course-form-box align-c justify-sb">
                   {props.courseInfo?.map((info, index) => ( 
                   <div key={index} className="course-form-info">
                       <div className='course-form-point'>
                           <h3 className='course-form-point-title'>{info.courseFormInfoTitle}</h3>
                       </div>
                        <p className="course-form-text">{info.courseFormInfoText}</p> 
                    </div>))}
                </div>
            </div>
        </section>
    )
}

export default CourseForm