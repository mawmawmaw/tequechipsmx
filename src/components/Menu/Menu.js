import React from 'react';
import { Link } from "react-router-dom";
import TwoHalves from '../TwoHalves/TwoHalves';

import './Menu.css';
import leftSideImg from '../../img/seccion_menu.jpg';
import rightSideBg from '../../img/bgtile.jpg';
import menuList from './Menu.json';

const Menu = () => {
    const renderMenuList = () => {
        return (
            menuList.map(seccion=>{
                return (
                    <React.Fragment key={seccion.id}>
                        <h3>{seccion.id}</h3>
                        <table>
                            <tbody>
                                {
                                    seccion.items.map(i=>{
                                        return (
                                            <tr key={i.item}>
                                                <td>{i.item}</td>
                                                <td className="precio">{i.precio}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </React.Fragment>
                )
            })
        )
    }
    const leftContent = (
        <div className="ui image full-background">
            <img src={leftSideImg} className="ui fluid image" alt="Seccion Menu"/>
        </div>
    )
    const rightContent = (
        <div className="ui text container segment menu-info">
            <div className="lista-precios">
                <h1>Lista de Precios</h1>
                {renderMenuList()}
            </div>
            <div className="main-cta">
                <Link to="/contacto">
                    <button className="ui button cta">
                        &iexcl;Haz tu pedido ya!
                    </button>
                </Link>
            </div>
        </div>
    )
    return <TwoHalves 
                containerCssClass="tc-menu"
                leftContent={leftContent} 
                rightSideBg={rightSideBg} 
                rightContent={rightContent}
            />
}

export default Menu;