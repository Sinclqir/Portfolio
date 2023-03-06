import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img1 from  '../../images/comparaisonTri.png'
import img2 from  '../../images/Portfolio.png'
import img3 from  '../../images/other.png'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>Mes projets</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "Sorting comparaison algorithm" description = "Technologies utilisées: JavaScript, HTML, CSS" author="Réalisé en groupe" time= "Temps passé: 4 mois"   img= {img1} link = "https://github.com/Sinclqir/Projet-Tutor-S4T"  />
            <ProjectBox title = "Portfolio Website" description = "Technologies utilisées: JavaScript, HTML, CSS, ReactJS" author="Réalisé en autonomie" time= "Temps passé: 1 semaine" img= {img2} link = "https://github.com/Sinclqir/Portfolio"  />
            <ProjectBox title = "Other" img= {img3} link = "https://github.com/Sinclqir?tab=repositories"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
