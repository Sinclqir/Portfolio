import React from 'react'
import './Opinion.css'
import OpinionBox from '../../components/OpinionBox/OpinionBox'

function Opinion() {
  return (
    <>
    <div id="Opinions" className='opinions'>
      <h1>Avis</h1>
      <div className="boxes">
        <OpinionBox animation = "fade-up" heading = "(Anonyme), Professeur Java Script à l'IUT Nice" text = "~ Je suis fier d'avoir eu Sinclair comme étudiant en développement web pendant mon cours de JavaScript. Sinclair a démontré une solide compréhension des concepts clés de JavaScript et a été en mesure de les appliquer avec succès dans des projets de groupe. Son travail a toujours été d'une qualité exceptionnelle, et il a été un contributeur clé dans la réussite de l'équipe." />
        <OpinionBox animation = "fade-up" heading = "Mathéo Spatola, tuteur de stage chez Viapass" text = "J'ai eu le plaisir de travailler avec Sinclair en tant que développeur stagiaire en mars 2022. Sinclair a montré une grande capacité à comprendre rapidement les projets qui lui ont été confiés et a été capable de travailler de manière autonome. Je recommande vivement Sinclair pour toute opportunité de développement web."/>
        <OpinionBox animation = "fade-up" heading = "Mickeal APPEL, maître d'apprentissage chez Buroclic" text = "~ J'ai eu le plaisir de superviser le travail de Sinclair chez Buroclic. En tant que développeur web, Sinclair a été en mesure de prendre en charge des projets de manière autonome et de les mener à bien de manière efficace. Sa capacité à travailler en équipe et à communiquer efficacement avec les autres membres de l'équipe a été particulièrement remarquable." />
      </div>
    </div>
    </>
  )
}export default Opinion
