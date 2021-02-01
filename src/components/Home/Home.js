import React from 'react';
import { Link } from "react-router-dom";

import './Home.css';
import mainImg from '../../img/main.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="img-container">
                <img className="ui fluid image blurred" src={mainImg} alt="Tequechips"/>
            </div>
            <div className="img-overlay">
                <div className="text-overlay">
                    <h1>PASTELITOS Y TEQUEÑOS, CON SABOR 100% MARACUCHO</h1>
                    <h2>&iexcl;UNA VEZ QUE LOS PRUEBAS NO PUEDES PARAR!</h2>
                    <div className="main-cta">
                        <Link to="/menu">
                            <button class="ui button cta">
                                Nuestro Menu
                            </button>
                        </Link>
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

export default Home;