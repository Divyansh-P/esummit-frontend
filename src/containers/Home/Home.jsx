import React from 'react';
import Esummit from '../Esummit/Esummit';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../contact/component/contact/Contact';
import Footer from '../Footer/Footer';
import FooterMain from '../Footer/FooterMain';
import SpeakerCard from '../speakers/SpeakerCard';
import Speakers from '../speakers/Speakers';
import RegisteredInformation from '../RegisteredInformation/RegisteredInformation';
import Cube from '../Cube/Cube';
import './Home.css';
const Home=()=>{
    return(
        
    
  <div className="home-container">
  <Esummit/>
  <AboutUs/>
  
  <Speakers />
  <Contact/>
  
<div className="lob">With ❤️ from Ecell NITH</div>
  
</div>
    )
}
export default Home;