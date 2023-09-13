import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Products.css';
const Products = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    let response = await fetch('https://fakestoreapi.com/products');
    let jsonData = await response.json();
    setProducts(jsonData);
  }
  return (
    <>
      <h1 className='heading'>Our Products</h1>

      <section className="box-container">
        {product.map((value) => {
          return (
            <>
              <div className="box" >
                  <img src={value.image} alt="error" />
                  <h4>{value.title.substring(0, 15)}</h4>
                  <p className='price'>${value.price}</p>
                  <Link to={`/products/${value.id}`} className='btn_cart'>Buy Now</Link>
                </div>
            </>
          )
        })}

      </section>
    </>
  )
}

export default Products;
