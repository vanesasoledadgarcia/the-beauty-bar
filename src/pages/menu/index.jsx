import React from 'react';
import './styles.css';
import Card from '../../components/card';
import {PRODUCTS} from '../../constants/data/products';
import {useNavigate} from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const onHandlerSelect = (product) => {
    navigate('/details/${product.id}', {state : product})
  }
  return (
    <div className="container">
      <div className = "products-container">
        {PRODUCTS.map((product) => (
            <Card product = {product} key = {product.name} onSelect={onHandlerSelect}/>
        ))}
      </div>
    </div>
  );
}

export default Menu;