import React from 'react';
import NavBar from '../components/navbar';
import Hero from '../components/hero.jsx';
import Footer from '../components/footer.jsx';
import profileImage from '../assets/asdf.png'

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