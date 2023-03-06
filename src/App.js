import './App.css';
import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

import Project from './views/Project/Project';
import Navbar from './components/Navbar/Navbar'
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Service from "./views/Service/Service"
import Contact from "./views/Contact/Contact"
import Opinion from "./views/Opinion/Opinion"




function App() {
  return (
    <>     
    <div className='body'>      
      <div id="loading_start" className='loading_start_none'>
        <p>Chargement</p>
        <PulseLoader color={"#7d12bf"} size={12} />
      </div>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Opinion/>
      <Contact/>
      
    </div> 
    </>
  );
}
export default App;
