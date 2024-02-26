import React from 'react';
import { useSelector } from "react-redux";
import { selectorText } from '../store/selector';
import Author from '../components/Author';
import Course from '../components/Course' ;
import CourseAdvantages from '../components/CourseAdvantages';
import CourseForm from '../components/CourseForm';
import CoursePrice from '../components/CoursePrice';
import CourseOffer from '../components/CourseOffer';

function Home (){
  const text = useSelector(selectorText);
      return (
      <>
      <Author {...text}/>
      <Course {...text}/>
      <CourseOffer {...text}/>
      <CourseAdvantages {...text}/>
      <CourseForm {...text}/>
      <CoursePrice {...text} />
      </>)}

export default Home