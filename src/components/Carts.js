import React from 'react'
import Navbar from './Navbar';
const Carts = (props) => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="carts">
        <h3>{props.title}</h3>
        <img src={props.img} alt="image" />
      </div>
    </div>
  )
}

export default Carts;
