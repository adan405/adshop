import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <section className="footer_section">
          <div className="footer_box">
            <h2>Adan Shop</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam illum eius saepe voluptas ores, amet cuobcaecati ipsam Maipiditate, eos</p>
          </div>
          <div className="footer_box">
            <div>
              <h2>Quick Link's</h2>
              <Link to='/' className='quick_links'>Home</Link>
              <Link to='/products' className='quick_links'>Product</Link>
              <Link to='/contact' className='quick_links'>Contact</Link>
              <Link to='/' className='quick_links'>Category</Link>
            </div>
          </div>
          <div className="footer_box">
            <div className="newsletter">
              <h2>Send us newsletter </h2>
              <input type="text" placeholder='Enter Your Email' />
            </div>
          </div>
          <div className="footer_box">
            <h2>Connect With Us</h2>
            <div className="social_links">
              <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
              <Link to="https://www.facebook.com/"><i className="fab fa-instagram"></i></Link>
              <Link to="https://www.facebook.com/"><i className="fab fa-twitter"></i></Link>
              <Link to="https://www.facebook.com/"><i className="fab fa-youtube"></i></Link>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer;
