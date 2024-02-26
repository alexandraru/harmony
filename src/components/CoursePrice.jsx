import React from 'react';

function CoursePrice (props){
    return (
       <div className="container">
            <h2>{props.coursePriseTitle}</h2>
            <div className="course-price-info d-flex align-c justify-sb">
                        {props.coursePriceItem?.map((item, index) => (<div key={index} className="course-price-option">
                            <h3>{item.coursePriseItemTitle}</h3>
                            <p className="course-price">{item.coursePriseItemCost}</p>
                            <p className="course-price-text">{item.coursePriseItemText}</p>
                        </div>))}
                        
            </div>
           
    </div>

    )
}

export default CoursePrice