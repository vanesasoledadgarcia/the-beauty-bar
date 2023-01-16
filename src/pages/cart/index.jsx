import React, { useContext } from "react";
import './styles.css';
import { CartContext } from "../../context";
import { CartItem } from "../../components";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const onHandlerOrder = () => {}
    return (
        <div className = "cart">
            <h1>Carrito</h1>
            <div className = "cart-content">
                {cart.length > 0 ? (
                    <>
                    {cart.map((item) => (
                        <CartItem key = {item.id} {...item}/>
                    ))}
                    <div className = "button-container">
                        <button type = "button" className = "button-cart" onClick = {onHandlerOrder}>
                            Comprar
                        </button>
                    </div>
                    </>
                ) : (
                <div>
                    <h2>El carrito esta vacio</h2>
                    <div className = "button-container">
                        <Link to = "/" className = "button-cart"> Inicio </Link>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
                }

export default Cart;