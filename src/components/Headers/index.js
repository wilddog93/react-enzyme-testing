import React from 'react';
import Logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo-img"/>
                </div>
            </div>
        </header>
    );
}

export default Header;
