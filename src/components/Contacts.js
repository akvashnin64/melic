import React, { useState, useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Contacts () {
    return(
        <div className='containerContactsPage'>
            <div className='infoContactsPage'>
                <div className='headerContacts'>
                    <p>КОНТАКТЫ</p>
                </div>
                <div className='mobilePhoneContacts'>
                    <img src='/img/phoneContacts.png'/>
                    <p>8(8452) 22-74-00<br></br>8(8452) 22-74-01</p>
                </div>
                <div className='timeContacts'>
                    <img src='/img/timeContacts.png'/>
                    <p>ПН-ЧТ с 8:00 до 17:00<br></br>ПТ с 8:00 до 16:00<br></br>Перерыв с 12:00 до 12:48</p>
                </div>
                <div className='locationContacts'>
                    <img src='/img/locationContacts.png'/>
                    <p>410028 Саратов <br></br> ул. им. Н. Г. Чернышевского, д. 116А</p>
                </div>
            </div>
            <div className="containerMapContactsPage">
                    <YMaps>
                        <Map 
                        className="mapContactsPage"
                        defaultState={{ center: [51.521924, 46.029397], zoom: 11 }}>
                            <Placemark geometry={[51.521924, 46.029397]} />
                        </Map>
                    </YMaps>
                </div>
          </div>
        
    )}

export default Contacts