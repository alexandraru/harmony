import React from 'react';
import Challenge from '../components/Challenge';

function ChallengeLang (props){
    return (
        <>
      {(props.language === "ru") && <Challenge text={props.russianLang} language={props.language} onChange={props.onChange}/>}
      {(props.language === "ua") && <Challenge text={props.ukrainianLang} language={props.language} onChange={props.onChange}/>}
        </>
    )
}

export default ChallengeLang