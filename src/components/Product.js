import React, { useState, useEffect } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom';
import './Product.css';
const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    let jsonData = await response.json();
    setProducts(jsonData);
  }
  const addCart = () =>{
    navigate('/carts');
  }
  return (
    <>
      <section className="container">
        <div className="box">
          <div className="box_img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="box_content">
            <h4>{product.category}</h4>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span className='price'>${product.price}</span>
            <Link to="/carts" className='btn_cart' onClick={addCart}>Add to Cart</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product;
