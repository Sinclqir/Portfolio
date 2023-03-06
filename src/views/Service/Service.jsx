import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>Mes services</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" icon = "fas fa-globe" heading = "Développement Web et Web Design" text = "Je propose mes services en dans le développement d'une application Web ou dans le développement du design de page Web." />
        <ServiceBox animation = "fade-up" icon = "fas fa-code" heading = "Développement Logiciel" text = "Je propose mes services dans le développement d'un application logiciel en Java."/>
        <ServiceBox animation = "fade-up" icon = "fas fa-info-circle" heading = "Test d'application" text = "Je fournis des solutions professionnelles de test de logiciels pour vos applications." />
        <ServiceBox animation = "fade-up" icon = "fas fa-users" heading = "Assistance et coaching" text = "Je propose de l'assistance et du coaching   en développement Web et logiciel." />
        <ServiceBox animation = "fade-up" icon = "fa-solid fa-object-group" heading = "Design Maquette" text = "Je design vos idées en maquette." />
      </div>
    </div>
    </>
  )
}export default Service