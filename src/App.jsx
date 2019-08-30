import React,{useState, useEffect} from 'react';
import Header from './Header';
import About from  './About'
import Portfolio from './Portfolio'
import ReactGA from 'react-ga';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas,far,fab); 
function App() {
  
  return (
    <>
      <Header />
      <About />
      <Portfolio/>
    </>
    
  
  );
}

export default App;
