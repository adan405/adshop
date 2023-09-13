import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div>
      <section className="contact">
        <h1 className='heading'>Contact US</h1>
        <div className="box">
          <div className="contact_form">
            <form action="">
              <input type="text" placeholder='Enter Your Name ' /><br />
              <input type="email" placeholder='Enter Your Email ' /><br />
              <input type="number" placeholder='Enter Your Number ' /><br />
              <textarea cols="30" rows="5" placeholder='Enter Your Message' className='textarea'></textarea>
            </form>
            <div className="contact_button">

            </div>
            <a href="" className="contact_btn">Submit</a>
          </div>
          <div className="contact_info">
            <div className="info_box">
              <i className="fa fa-phone"></i>
              <p>+92 323 4881924</p>
            </div>
            <div className="info_box">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p>Nishter Colony Lahore Pakistan</p>
            </div>
            <div className="info_box">
            <i className="fa fa-envelope" aria-hidden="true"></i>
              <p>adanbhatti6677@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
