import { useState, useContext } from 'react';
import Router from '../src/router';
import './App.css';
import { CartProvider } from './context';
import {Navbar, Sidebar, CartItem} from './components';

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const onHandlerCart = () => {
  setOpen(!isOpen);
}
  return (
    <div className = "container">
      <CartProvider>
      <Sidebar onClose = {onHandlerCart} isOpen ={isOpen}/>
      <Navbar onHandlerCart = {onHandlerCart}/>
      <Router/>
      </CartProvider>
    </div>
  )
}

export default App;
