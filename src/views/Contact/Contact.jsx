import React from 'react'
import './Contact.css'
import ContactBox from '../../components/ContactBox/ContactBox'

function Contact() {
  return (
    <>
    <div id="Contact" className='contact'>
      <h1>Contactez moi</h1>
      <div className="boxes">
        <ContactBox animation="fade-right" class= "fas fa-envelope" name="Email" link="mailto:sinclair@balivet.com"/>
        <ContactBox animation="fade-up" class= "fab fa-github" name="Github" link="https://github.com/Sinclqir"/>
        <ContactBox animation="fade-left" class= "fab fa-linkedin" name="Linkedin" link="https://www.linkedin.com/in/sinclair-balivet/"/>
      </div>

    </div>
    </>
  )
}

export default Contact
