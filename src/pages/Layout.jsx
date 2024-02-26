import React from 'react';
import {useSelector} from 'react-redux';
import { selectorText } from '../store/selector';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout (){
  const text = useSelector(selectorText);
    return (
        <>
        <Header {...text}/>
        <Outlet/>
        <Footer {...text}/>
         </>
         )}


export default Layout