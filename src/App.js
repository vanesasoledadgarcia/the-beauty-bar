import logo from './logo.svg';
import logonav from './components/navbar/logo.png';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import {PRODUCTS} from './constants/data/products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className = "product-container">
        {PRODUCTS.map((product) => (
            <Card product = {product} key = {product.name}/>
        ))}
      </div>
    </div>
  );
}

export default App;
