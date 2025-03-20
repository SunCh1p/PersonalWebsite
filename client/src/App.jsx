import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import { DarkModeProvider, DarkModeContext } from './context.jsx';
import Home from './pages/home';
import About from './pages/about';
import CV from './pages/cv';
import Projects from './pages/projects';
import Contact from './pages/contact';


import './App.css'

function RenderApp(){
  const {darkMode} = useContext(DarkModeContext);
  return(
    <div className={`appContainer ${darkMode ? 'bgPrimary-light textLight light-mode' : 'bgPrimary-dark textDark dark-mode'}`}>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/Resume' element = {<CV/>}/>
        <Route path = '/Projects' element = {<Projects/>}/>
        <Route path = '/Contact' element = {<Contact/>}/>
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
