import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLanguageUa, fetchLanguageRu} from './store/HarmonySlice'
import BackToTopButton from './components/BackToTopButton';
import Feedback from './components/Feedback';
import Home from './pages/Home';
import Layout from './pages/Layout';
import './styles/App.scss';
import { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import ChallengeLang from './pages/ChallengeLang';
import Subscription from './components/Subscription';

function App() {
  const {error} = useSelector(state => state.info);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchLanguageRu());
  dispatch(fetchLanguageUa());
  }, [dispatch])
  
  return (
    <>
      {error && <h2>An error occured: {error}</h2>}
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='author' element={<Home/>}/>
        <Route path='course' element={<Home/>}/>
        <Route path='contacts' element={<Home/>}/>
        <Route path='challenge' element={<ChallengeLang/>}/>
        <Route path='subscribe' element={<Subscription/>}/>
        <Route path='feedback' element={<Feedback/>}/>
        </Route>
      </Routes>
    
      <BackToTopButton/>
    </>
  );
}

export default App;
