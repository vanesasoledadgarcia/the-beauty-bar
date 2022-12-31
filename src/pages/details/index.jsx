import React, {useState} from "react";
import './styles.css';
import {useLocation} from 'react-router-dom';
import Card from '../../components/card';
import { PRODUCTS } from "../../constants/data/products";

const Details = () => {
    const {state} = useLocation();
    const [cart, setCart] = useState ([]);
    const onDecreaseItem = (id) => {
        setCart(currentCart => {
            if(currentCart?.find((product) => product.id === id)?.quantity === 1){ 
                return currentCart.filter((product) => product.id =! id);
            } else {
                return currentCart?.map((product) => {
                    if(product.id === id) {
                        return {
                            ...product,
                            quantity: product.quantity - 1
                        }
                    } else {
                        return product;
                    }
                })
            }
        })
    }
    const onIncreaseItem = (id) => {
        const item = PRODUCTS.find((product) => product.id === id);
            if(cart?.find((product) => product.id === id)?.quantity === item.stock) return;
            if(cart?.length === 0){
                setCart([{...item, quantity: 1}]);
            } else if(cart?.length > 0 && !cart?.find((product) => product.id === id)){
                setCart([...cart, {...item, quantity: 1}]);
            } else {
                setCart (currentCart => {
                    return currentCart.map((product) => {
                        if(product.id === id) {
                            return {...product, quantity: product.quantity + 1}
                        } else {
                            return product;
                        }
                    })
                })
            }
        }

    const getItemQuantity = (id) => {
        return cart?.find((product) => product.id === id)?.quantity || 0;
    }   

    return (
        <div className = "detail-container">
            <Card 
            product = {state} 
            key = {state.name} 
            onSelect={()=>{}} type = 'maxCard' 
            descreaseQty = {onDecreaseItem} 
            increaseQty = {onIncreaseItem} 
            numberOfItem = {getItemQuantity(state?.id)}
            />
        </div>
    )
}

export default Details;