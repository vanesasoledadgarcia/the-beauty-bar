import React from "react";
import './styles.css';
import logonav from './logo.png';
import {Link} from "react-router-dom";

const Navbar = ({numbersOfItems = 0, onHandlerCart}) => {
    return (
        <div className = "navbar">
            <Link to = '/'><img className = "logonav" src = {logonav} alt="Logo de The Beauty Bar"/></Link>
            <ul className = "menu">
                <li onClick = {onHandlerCart} className = "item">
                    <img className = "img-cart" src = "https://img.freepik.com/vector-premium/carrito-compras-supermercado-canasta-utilizada-compras-carrito-compras-diseno-ilustracion-plana_460582-381.jpg?w=2000"/>
                    <div>
                        <span>{numbersOfItems}</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
