import React,{useState, useEffect} from 'react';
import Header from './Header';
import About from  './About'
import Portfolio from './Portfolio'
import ReactGA from 'react-ga';
import './App.css';

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
