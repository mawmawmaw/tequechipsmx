import React from 'react';
import { Link } from "react-router-dom";

import './Footer.css';
import logo from '../../img/logo.jpg';

const Footer = () => {
    return (
        <div id="footer">
            <div className="ui four column stackable grid container">
                <div className="column">
                    <div className="ui image">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
                <div className="column"></div>
                <div className="column">
                    <div className="ui secondary menu">
                        <div className="right menu">
                        <a href="https://www.instagram.com/tequechipsmx/" className="ui item" target="_blank">
                            <i className="instagram icon"></i>
                        </a>
                        <a href="https://www.facebook.com/TequeChipsMX/" className="ui item" target="_blank">
                            <i className="facebook icon"></i>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="footer-info">
                        <p>
                            <a href="mailto:tequechipsmx@gmail.com"><i className="mail icon"></i>tequechipsmx@gmail.com</a>
                            <br/><br/><i className="map marker alternate icon"></i>Tlaxcala 33, 06760
                            <br/><i className="icon"></i>Ciudad de Mexico, Mexico
                            <br/><br/><i className="phone icon"></i>+525616166191
                        </p>
                    </div>
                </div>
            </div>
            <div className="copyright">COPYRIGHT &copy; 2021 TEQUECHIPSMX - TODOS LOS DERECHOS RESERVADOS.</div>
        </div>
    )
}

export default Footer;