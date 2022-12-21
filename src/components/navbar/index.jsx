import React from "react";
import './styles.css';
import logonav from './logo.png';

const Navbar = () => {
    return (
        <div className = "navbar">
            <img className = "logonav" src = {logonav} alt="Logo de The Beauty Bar"/>
            <ul className = "menu">
                <li className = "item">
                    <a href= "">Nosotros</a>
                </li>
                <li className = "item">
                    <a href= "">Productos</a>
                </li>
                <li className = "item">
                    <a href= "">Contacto</a>
                </li>
                <li className = "item">
                    <img className = "img-carro" src = "https://img.freepik.com/vector-premium/carrito-compras-supermercado-canasta-utilizada-compras-carrito-compras-diseno-ilustracion-plana_460582-381.jpg?w=2000"/>
                    <div>
                        <span>0</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
