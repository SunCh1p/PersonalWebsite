import React, {useContext} from 'react';
import NavBar from '../components/navbar';
import Hero from '../components/hero.jsx';
import Footer from '../components/footer.jsx';
import Intro from '../components/intro.jsx';

function Home(){

  return(
    <div className="Home">
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default Home;