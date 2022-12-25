import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import {PRODUCTS} from './constants/data/products';
import { useState } from 'react';
import Sidebar from './components/sidebar';


function App() {
  const [isOpen, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const onHandlerCart = () => {
  setOpen(!isOpen);
}

  return (
    <div className="container">
      <Sidebar onClose = {onHandlerCart} isOpen ={isOpen}/>
      <Navbar numbersOfItems = {0} onHandlerCart = {onHandlerCart}/>
      <div className = "products-container">
        {PRODUCTS.map((product) => (
            <Card product = {product} key = {product.name}/>
        ))}
      </div>
    </div>
  );
}

export default App;
