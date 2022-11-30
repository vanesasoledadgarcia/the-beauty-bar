import React from "react";
import './styles.css';

const Navbar = ({children}) => {
    return (
        <div className = "navbar">
            {children}
        </div>
    )
}

export default Navbar;
