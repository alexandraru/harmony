import React from 'react';
import Challenge from '../components/Challenge';
import { useSelector } from 'react-redux';
import { selectorText } from '../store/selector';

function ChallengeLang (){
  const text = useSelector(selectorText)
  return (
  <>
          <Challenge {...text}/>
  </>)}

export default ChallengeLang