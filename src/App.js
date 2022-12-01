import logo from './logo.svg';
import logonav from './components/navbar/logo.png';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
        <img className = "logonav" src= {logonav} alt="Logo de The Beauty Bar"/>
        <ul className = "menu">
          <li className = "item">
            <a href= "">Nosotros</a>
          </li>
          <li className = "item">
            <a href= "">Productos</a>
          </li>
          <li className = "item">
            <a href= "">Ubicacion</a>
          </li>
          <li className = "item">
            <a href= "">Contacto</a>
          </li>
        </ul>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
