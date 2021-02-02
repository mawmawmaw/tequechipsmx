import React from 'react';
import TwoHalves from '../TwoHalves/TwoHalves';

import './Contacto.css';
import leftSideBg from '../../img/bgtile.jpg';
import rightSideImg from '../../img/seccion_contacto.jpg';

const Contacto = () => {
    const leftContent = (
        <div className="ui text container segment contacto-info">
            <div className="agenda-pedido">
                <h2>&iexcl;Agenda tu pedido!</h2>
                <p>
                    Nuestra prioridad son nuestros clientes. Agenda tu pedido y retíralo, o envíanos un beat, didi, uber o rappi.
                </p>
                <p>
                    <a href="https://wa.me/525616166191">
                        <button className="ui green button">
                            <i className="whatsapp icon"></i>Env&iacute;anos un mensaje
                        </button>
                    </a>
                </p>
                <div className="ui two column stackable grid mas-info">
                    <div className="column">
                        <h3>Horario de Atenci&oacute;n<br/><small>(para entrega y venta al detal)</small></h3>
                        <ul>
                            <li>L: Cerrado</li>
                            <li>M: Cerrado</li>
                            <li>M: Cerrado</li>
                            <li>J: 10:00 – 18:00</li>
                            <li>V: 10:00 – 18:00</li>
                            <li>S: 10:00 – 18:00</li>
                            <li>D: 10:00 – 15:00</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Informaci&oacute;n</h3>
                        <p>
                            <a href="mailto:tequechipsmx@gmail.com"><i className="mail icon"></i>tequechipsmx@gmail.com</a>
                        </p>
                        <p>
                            <i className="map marker alternate icon"></i>Tlaxcala 33, 06760
                            <br/><i className="icon"></i>Ciudad de Mexico, Mexico
                        </p>
                        <p>
                            <i className="phone icon"></i>+525616166191
                        </p>
                    </div>
                </div>
            </div>
            <br/><p><strong>Cualquier duda no dudes en comunicarte con nosotros por Whatsapp, Email o Instagram.</strong></p>
        </div>
    )

    const rightContent = (
        <div className="ui image full-background">
            <img src={rightSideImg} className="ui fluid image" alt="Seccion Contacto"/>
        </div>
    )
    return <TwoHalves 
                containerCssClass="contacto"
                leftSideBg={leftSideBg} 
                leftContent={leftContent} 
                rightContent={rightContent}
            />
}

export default Contacto;