import React from 'react';

function CoursePrice (props){
    return (
       <>
       {props.text.map((el, index) => (
       <div key={index} className="container">
            <h2>{el.coursePriseTitle}</h2>
            <div className="course-price-info d-flex align-c justify-sb">
                        {el.coursePriceItem.map((item, index) => (<div key={index} className="course-price-option">
                            <h3>{item.coursePriseItemTitle}</h3>
                            <p className="course-price">{item.coursePriseItemCost}</p>
                            <p className="course-price-text">{item.coursePriseItemText}</p>
                        </div>))}
                        
            </div>
           
    </div>))}
    </> 
    )
}

export default CoursePrice