import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import { DarkModeProvider, DarkModeContext } from './context.jsx';

import Home from './pages/home';

import './App.css'

function RenderApp(){
  const {darkMode} = useContext(DarkModeContext);
  return(
    <div className={`appContainer ${darkMode ? 'bgPrimary-light textLight light-mode' : 'bgPrimary-dark textDark dark-mode'}`}>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
      </Routes>
    </div>
  );
}

function App() {
  return (
      <DarkModeProvider>
        <RenderApp/>
      </DarkModeProvider>
  );
}

export default App
