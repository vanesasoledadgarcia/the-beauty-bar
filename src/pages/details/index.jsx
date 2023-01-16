import React, {useState, useContext, useEffect} from "react";
import './styles.css';
import {useLocation, useParams} from 'react-router-dom';
import Card from '../../components/card';
import { CartContext } from '../../context';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const Details = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams() || {};
    const {state} = useLocation() || {};
    const { onDecreaseItem, onIncreaseItem, getItemQuantity } = useContext(CartContext);

    useEffect(() => {
        const db = getFirestore();
        const q = query(
            collection(db, 'products'),
            where('id', '==', id),
        );
        getDocs(q)
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    setProduct(doc.data())
                })
            })
                .catch((error) => {
                    console.log(error)
                })     
    }, [id])

    return (
        <div className = "detail-container">
            <Card 
                product = {state} 
                key = {state.name} 
                onSelect={()=>{}} type = 'maxCard' 
                descreaseQty = {onDecreaseItem} 
                increaseQty = {onIncreaseItem} 
                numberOfItem = {getItemQuantity(state.id)}
            />
        </div>
    )
}

export default Details;