import Navbar from './components/navbar';
import { useState, useContext } from 'react';
import Sidebar from './components/sidebar';
import Router from '../src/router';
import {Link} from 'react-router-dom';
import './App.css';
import { CartProvider } from './context';

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const onHandlerCart = () => {
  setOpen(!isOpen);
}
  return (
    <div className = "container">
      <CartProvider>
      <Sidebar onClose = {onHandlerCart} isOpen ={isOpen}>
        <div className = "container-cart">
          <Link to = '/cart' className = "button-cart">Comprar</Link>
        </div>
      </Sidebar>
      <Navbar onHandlerCart = {onHandlerCart}/>
      <Router/>
      </CartProvider>
    </div>
  )
}

export default App;
