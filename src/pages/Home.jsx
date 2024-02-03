import React from 'react';
import Author from '../components/Author';
import Course from '../components/Course';
import CourseAdvantages from '../components/CourseAdvantages';
import CourseForm from '../components/CourseForm';
import CoursePrice from '../components/CoursePrice';
import CourseOffer from '../components/CourseOffer';

function Home (props){
    return (
    <>
      {(props.language === "ru") && <Author text={props.russianLang}/>}
      {(props.language === "ua") && <Author text={props.ukrainianLang}/>}
      {(props.language === "ru") && <Course text={props.russianLang}/>}
      {(props.language === "ua") && <Course text={props.ukrainianLang}/>}
      {(props.language === "ru") && <CourseOffer text={props.russianLang}/>}
      {(props.language === "ua") && <CourseOffer text={props.ukrainianLang}/>}
      {(props.language === "ru") && <CourseAdvantages text={props.russianLang}/>}
      {(props.language === "ua") && <CourseAdvantages text={props.ukrainianLang}/>}
      {(props.language === "ru") && <CourseForm text={props.russianLang}/>}
      {(props.language === "ua") && <CourseForm text={props.ukrainianLang}/>}
      {(props.language === "ru") && <CoursePrice text={props.russianLang}/>}
      {(props.language === "ua") && <CoursePrice text={props.ukrainianLang}/>}
    </>
    )
}

export default Home