import React from 'react';
import './App.css';

import About from './Components/About/About';
import Body from './Components/Body/Body';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
    <Header/>
    <Body/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;
