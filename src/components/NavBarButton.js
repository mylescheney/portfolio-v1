import React from "react";
import '../App.css';

const NavBarButton = ({ title }) => {
    return (
        <div className='navBarButton'>
            <p className='navBarText'>{title}</p>
        </div>
    );
}

export default NavBarButton;