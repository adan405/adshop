import React from 'react'
import Products from './Products'

const Home = () => {
 
  return (
    <div>
      <section className="hero_section">
        <div className="home_content">
          <h3>In this season, find the best</h3>
          <h1>Exclusive collection for <br /> everyone</h1>
          <div className="btn">Shop Now</div>
        </div>
      </section>
      <Products />
      
       
    </div>
  )
}

export default Home;
