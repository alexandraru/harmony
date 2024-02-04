import React from 'react';
import Subscription from '../components/Subscription';
import { ToastContainer } from 'react-toastify';

function SubscriptionLang (props){
    return (
    <>
      {(props.language === "ru") && <Subscription text={props.russianLang} language={props.language} onChange={props.onChange}/>}
      {(props.language === "ua") && <Subscription text={props.ukrainianLang} language={props.language} onChange={props.onChange}/>}
      <ToastContainer/>
    </>
    )
}

export default SubscriptionLang