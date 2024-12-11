import React from 'react'
import Landing from './components/landing/landing';
import Navbar from './components/Navbar/navbar';
import About from './components/about/about';
import Mission from './components/mission/mission';
import Authorities from "./components/authorities/authorities";
import Joinus from "./components/join/join";
import Photogallery from "./components/photogallery/photo";
import Placement from "./components/placement/placement";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function Home() {
  return (
    <div>
         <Navbar/>
    <Landing/>
    <About/>
    <Mission/>
    <Authorities/>
    <Joinus/>
    <Photogallery/>
    <Placement/>
    <Contact/>
    <Footer/>


    </div>
  )
}

export default Home;