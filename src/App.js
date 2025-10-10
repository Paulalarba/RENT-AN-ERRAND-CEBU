import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
