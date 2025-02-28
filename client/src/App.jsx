import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import './App.css'

function App() {

  return (
    <div className="appContainer">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App
