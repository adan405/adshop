
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Product from './components/Product';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Carts from './components/Carts';
function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/carts' element={<Carts/>}/>
      </Routes>
<Footer/>
    </>
  );
}

export default App;

