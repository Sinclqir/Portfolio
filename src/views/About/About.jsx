import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>À propos de moi</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>Qui je suis ?</h2>
        <p>Bonjour, je suis un étudiant au campus Ynov en 3ème année de Bachelor en informatique spécialisé dans le développement web. Grâce à mes projets individuels et collaboratifs, j'ai acquis une solide expérience dans l'utilisation de technologies telles que JavaScript, PHP, HTML/CSS, React.js, Java et Figma, et j'ai hâte de partager mes compétences et mes réalisations avec vous dans mon portfolio.</p>
        <a href="https://www.linkedin.com/in/sinclair-balivet/" target="_blank" rel="noopener noreferrer">Contactez moi</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
