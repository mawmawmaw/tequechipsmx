import React from 'react';

import './Contacto.css';
import leftSideImg from '../../img/bgtile.jpg';
import rightSideBg from '../../img/seccion_contacto.jpg';

const Contacto = () => {
    return (
        <div className="contacto-container ui two column stackable grid">
            <div className="ui column no-padding" style={{backgroundImage: `url(${leftSideImg})`}}>
                <div className="ui text container segment contacto-info">
                    <div className="agenda-pedido">
                        <h2>&iexcl;Agenda tu pedido!</h2>
                        <p>
                            Nuestra prioridad son nuestros clientes. Agenda tu pedido y retíralo, o envíanos un beat, didi, uber o rappi.
                        </p>
                        <a href="https://wa.me/525616166191">
                            <button class="ui green button">
                                <i class="whatsapp icon"></i>Env&iacute;anos un mensaje
                            </button>
                        </a>
                    </div>
                    <div className="ui two column grid mas-info">
                        <div className="column">
                            <h3>Horario de Atenci&oacute;n<br/><small>(para entrega y venta al detal)</small></h3>
                            <ul>
                                <li>lun. Cerrado</li>
                                <li>mar. Cerrado</li>
                                <li>mié. Cerrado</li>
                                <li>jue. 10:00 – 18:00</li>
                                <li>vie. 10:00 – 18:00</li>
                                <li>sáb. 10:00 – 18:00</li>
                                <li>dom. 10:00 – 15:00</li>
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
                    <p><strong>Cualquier duda no dudes en comunicarte con nosotros por Whatsapp, Email o Instagram.</strong></p>
                </div>
            </div>
            <div className="ui column no-padding">
                <img src={rightSideBg} className="ui fluid image" alt="Seccion Contacto"/>
            </div>
        </div>
    )
}

export default Contacto;