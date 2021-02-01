import React from 'react';
import { Link } from "react-router-dom";

import './Menu.css';
import leftSideImg from '../../img/seccion_menu.jpg';
import rightSideBg from '../../img/bgtile.jpg';

const Menu = () => {
    return (
        <div className="menu-container ui two column stackable grid">
            <div className="ui column no-padding">
                <img src={leftSideImg} className="ui fluid image" alt="Seccion Menu"/>
            </div>
            <div className="ui column no-padding menu-block" style={{backgroundImage: `url(${rightSideBg})`}}>
                <div className="ui text container segment menu-info">
                    <div className="lista-precios">
                        <h1>Lista de Precios</h1>
                        <h3>Teque&ntilde;os</h3>
                        <table>
                            <tr>
                                <td>10 teque&ntilde;os de queso</td>
                                <td className="precio">$90</td>
                            </tr>
                            <tr>
                                <td>20 teque&ntilde;os de queso</td>
                                <td className="precio">$180</td>
                            </tr>
                            <tr>
                                <td>30 teque&ntilde;os de queso</td>
                                <td className="precio">$270</td>
                            </tr>
                            <tr>
                                <td>40 teque&ntilde;os de queso</td>
                                <td className="precio">$360</td>
                            </tr>
                            <tr>
                                <td>50 teque&ntilde;os de queso</td>
                                <td className="precio">$450</td>
                            </tr>
                        </table>
                        <h3>Teque&ntilde;os de Fiesta (Pequechips)</h3>
                        <table>
                            <tr>
                                <td>50 teque&ntilde;os de fiesta</td>
                                <td className="precio">$350</td>
                            </tr>
                            <tr>
                                <td>100 teque&ntilde;os de fiesta</td>
                                <td className="precio">$750</td>
                            </tr>
                            <tr>
                                <td>150 teque&ntilde;os de fiesta</td>
                                <td className="precio">$1050</td>
                            </tr>
                            <tr>
                                <td>200 teque&ntilde;os de fiesta</td>
                                <td className="precio">$1400</td>
                            </tr>
                        </table>
                        <h3>Pastelitos<br/><small>(carne molida, queso o papa con queso)</small></h3>
                        <table>
                            <tr>
                                <td>6 Pastelitos</td>
                                <td className="precio">$102</td>
                            </tr>
                            <tr>
                                <td>12 Pastelitos</td>
                                <td className="precio">$206</td>
                            </tr>
                            <tr>
                                <td>18 Pastelitos</td>
                                <td className="precio">$306</td>
                            </tr>
                            <tr>
                                <td>24 Pastelitos</td>
                                <td className="precio">$408</td>
                            </tr>
                            <tr>
                                <td>30 Pastelitos</td>
                                <td className="precio">$510</td>
                            </tr>
                        </table>
                        <h3>Salsa</h3>
                        <table>
                            <tr>
                                <td>Salsa tartara 4oz.</td>
                                <td className="precio">$15</td>
                            </tr>
                            <tr>
                                <td>Salsa tartara 8oz.</td>
                                <td className="precio">$30</td>
                            </tr>
                        </table>
                    </div>
                    <div className="main-cta">
                        <Link to="/contacto">
                            <button class="ui button cta">
                                &iexcl;Haz tu pedido ya!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;