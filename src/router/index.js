import {Routes, Route} from 'react-router-dom';
import {Home, Menu, Cart, Details} from '../pages';

const Router = () => {
    return (
        <Routes>
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path = "/menu" element = {<Menu/>}/>
            <Route exact path = "/cart" element = {<Cart/>}/>
            <Route exact path = "/details/:id" element = {<Details/>}/>
        </Routes>
    )
}

export default Router;
