import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout (props){
    return (
        <>
      {(props.language === "ru") && <Header text={props.russianLang} language={props.language} onChange={props.onChange}/>}
      {(props.language === "ua") && <Header text={props.ukrainianLang} language={props.language} onChange={props.onChange}/>}
      <Outlet/>
      {(props.language === "ru") && <Footer text={props.russianLang}/>}
      {(props.language === "ua") && <Footer text={props.ukrainianLang}/>}
    </>
    )
}

export default Layout