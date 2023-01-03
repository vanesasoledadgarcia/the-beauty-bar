import React, {useState, useContext} from "react";
import './styles.css';
import {useLocation} from 'react-router-dom';
import Card from '../../components/card';
import { CartContext } from '../../context';

const Details = () => {
    const {state} = useLocation();
    const { onDecreaseItem, onIncreaseItem, getItemQuantity } = useContext(CartContext);

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