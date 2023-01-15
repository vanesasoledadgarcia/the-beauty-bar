import React from 'react';
import './styles.css';
import Card from '../../components/card';
//import {PRODUCTS} from '../../constants/data/products';
import {useNavigate} from 'react-router-dom';
import { getFireStore, doc, getDoc } from 'firebase/firestore';
import Loader from '../../components/loader';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const onHandlerSelect = (product) => {
    navigate('/details/${product.id}', {state : product})
  }

  useEffect (() => {
    setLoading(true);
    const db = getFirestore();
    const products = collection(db, 'products');
    getDocs(products)
      .then((snapshot) => {
        const result = snapshot.docs.map((doc) => (doc.data()))
        setProducts(result);
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className = "loading-container">
          <Loader/>
        </div>
      ) : (
        <>
        <h1>Productos destacados</h1>
        <div className = "products-container">
        {products.map((product) => (
            <Card product = {product} key = {product.name} onSelect={onHandlerSelect}/>
        ))}
        </div>
        </>
      )}
    </div>
  );
}

export default Menu;