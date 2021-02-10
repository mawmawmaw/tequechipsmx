import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';
import logo from '../../img/logo.jpg';

const Header = () => {
    return (
        <div id="header">
            <div className="ui secondary menu">
                <Link to="/" className="item">
                    <div className="ui image">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </Link>
                <div className="right menu">
                    <Link to="/" className="ui item home" title="Home">
                        <i className="home icon"></i> Inicio
                    </Link>
                    <Link to="/menu" className="ui item" title="Menu">
                        <i className="food icon"></i> Men&uacute;
                    </Link>
                    <Link to="/contacto" className="ui item" title="Contacto">
                        <i className="phone icon"></i> Cont&aacute;ctanos
                    </Link>
                    <a href="https://www.instagram.com/tequechipsmx/" rel="noreferrer" className="ui item" target="_blank" title="Instagram">
                        <i className="instagram icon"></i>
                    </a>
                    <a href="https://www.facebook.com/TequeChipsMX/" rel="noreferrer" className="ui item" target="_blank" title="Facebook">
                        <i className="facebook icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;