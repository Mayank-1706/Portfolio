import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h1 className='contact_heading'>Contact</h1>
        <div className='contact_info'>
          <div className='contact_main'>
            <img className='contact_logo' src='https://freesvg.org/img/Mail-Icon-White-on-Black.png'></img>
            <p>mbhatnagar292@gmail.com</p>
            <img className='contact_logo' src='https://fsymbols.com/images/phone-icon.png'></img>
            <p>7380239247</p>
          </div>
          <div className='contact_form' >
            <input className='contact_form_elements' type="text" name="Your Name" /><br></br>
            <input className='contact_form_elements' type="text" name="Your Email" /><br></br>
            <input className='contact_form_elements' type="text" name="Your Message" /><br></br>
            <input className='submit' type="submit" value="Submit" /><br></br>
          </div>
        </div>
      </div>

  )
}

export default Contact
