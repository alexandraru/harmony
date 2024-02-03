import React from 'react';
import Subscription from '../components/Subscription';

function SubscriptionLang (props){
    return (
    <>
      {(props.language === "ru") && <Subscription text={props.russianLang} language={props.language} onChange={props.onChange}/>}
      {(props.language === "ua") && <Subscription text={props.ukrainianLang} language={props.language} onChange={props.onChange}/>}
      
    </>
    )
}

export default SubscriptionLang