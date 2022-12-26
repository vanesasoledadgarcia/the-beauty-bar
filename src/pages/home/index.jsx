import React from "react";
import './styles.css';
import homeImg from './home.jpg';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Home = () => {
    const {state} = useLocation();
    return (
        <div className = "container-img">
            <Link to = '/menu'>IMAGEN</Link>
            <img className = "home-img" src= {homeImg} alt="" />
        </div>
    )
}

export default Home;