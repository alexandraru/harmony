import React from 'react';
import BackToTopButton from './components/BackToTopButton';
import Feedback from './components/Feedback';
import Home from './pages/Home';
import Layout from './pages/Layout';
import './styles/App.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ChallengeLang from './pages/ChallengeLang';
import SubscriptionLang from './pages/SubscriptionLang';



function App() {
  const [russianLang, setRussianLang] = useState([]);
  const [ukrainianLang, setUkrainianLang] = useState([]);
  const [language, setLanguage] = useState("ru");
  const changeLang = () => {language === "ru" ? setLanguage("ua") : setLanguage("ru")};

  useEffect(() => {
   try {
    axios.get("https://65b822dc46324d531d55fea5.mockapi.io/russian").then((res) => setRussianLang(res.data));
    axios.get("https://65b822dc46324d531d55fea5.mockapi.io/ukrainian").then((res) => setUkrainianLang(res.data));
  } catch(err){
    alert("Упссс....")
  }
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout russianLang={russianLang} ukrainianLang={ukrainianLang} language={language} onChange={changeLang}/>}>
        <Route index element={<Home russianLang={russianLang} ukrainianLang={ukrainianLang} language={language}/>}/>
        <Route path='author' element={<Home russianLang={russianLang} ukrainianLang={ukrainianLang} language={language}/>}/>
        <Route path='course' element={<Home russianLang={russianLang} ukrainianLang={ukrainianLang} language={language}/>}/>
        <Route path='contacts' element={<Home russianLang={russianLang} ukrainianLang={ukrainianLang} language={language}/>}/>
        <Route path='challenge' element={<ChallengeLang russianLang={russianLang} ukrainianLang={ukrainianLang} language={language}/>}/>
        <Route path='subscribe' element={<SubscriptionLang russianLang={russianLang} ukrainianLang={ukrainianLang} language={language}/>}/>
        <Route path='feedback' element={<Feedback/>}/>
        </Route>
      </Routes>
    
      <BackToTopButton/>
    </>
  );
}

export default App;
