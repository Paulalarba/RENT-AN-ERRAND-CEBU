import React from 'react';
import './App.css';
import HowItWorks from './components/HowItWorks';
import Contacts from './components/Contacts';
import Header from './components/Header';
import AboutUS from './components/AboutUs';

function App() {
  return (
    <div>
      <Header />
      <AboutUS />
      <HowItWorks />
      <Contacts />
    </div>

  );
}

export default App;
