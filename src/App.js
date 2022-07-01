import React from 'react';  
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Skills from './components/Skills';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

// import components 

const App = () => {
  return <div >
 
  <Banner></Banner>
  <Testimonials/>
  <Skills/>
  <Team/>
  <Newsletter/>
  <Contact/>
  <Footer/>
  </div>
};

export default App;
