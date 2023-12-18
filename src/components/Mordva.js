import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Mordva = () => {
    return(
        <>
        <div className="mainHeaderBranche">
            <p>ФИЛИАЛ ПО РЕСПУБЛИКЕ МОРДОВИЯ</p>
        </div>

        <div className="textAboutBranche">
            <p>Площадь мелиорированных земель, обслуживаемая мелиоративными системами (с использованием ГТС) федеральной собственности, находящимися  в оперативном управлении  филиала по Республике Мордовия ФГБУ «Управление «Саратовмелиоводхоз» составляет -  23540 га.</p>
            <img id="uliyanovskPicture" src="/img/mordva1.png"/>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        
        <div className="containerLeftChannelsBrancheV2">
            <div className="leftChannelsBranche">
                <img src="/img/water.png"/>
                <p>ЕМКОСТЬ ВОДОХРАНИЛИЩ ОРОСИТЕЛЬНЫХ СИСТЕМ СОСТАВЛЯЕТ: 11,88 МЛН. МЕТРОВ КУБИЧЕСКИХ</p>
            </div>
            <div className="leftChannelsBranche">
                <img src="/img/plant.png"/>
                <p>НА БАЛАНСЕ ФИЛИАЛА 75,533 ТЫС. ГА МЕЛИОРИРОВАННЫХ ЗЕМЕЛЬ, В ТОМ ЧИСЛЕ ОРОШАЕМЫЕ (В Т.Ч. УСЛОВНО ОРОШАЕМЫЕ) - 44,600 ГА, ОСУШЕННЫХ ЗЕМЕЛЬ - 30,933 ГА</p>
            </div>
        </div>

        <div className="containerContactsBranche">

            <div className="contactsBranche">
                <div className='headerContactsBranche'>
                    <p>КОНТАКТЫ</p>
                </div>
                <div className='mobilePhoneContactsBranche'>
                    <img src='/img/phoneContacts.png'/>
                    <p>8 (8342) 24-88-19</p>
                </div>
                <div className='emailContactsBranche'>
                    <img src='/img/emailContacts.png'/>
                    <p>melio@list.ru</p>
                </div>
                <div className='locationContactsBranche'>
                    <img src='/img/locationContacts.png'/>
                    <p>430011, Республика Мордовия, г. Саранск, ул.Степана Разина, д.19</p>
                </div>
            </div>

            <div className="containerMap">
            <YMaps>
                <Map 
                className="map"
                defaultState={{ center: [54.187369, 45.166664], zoom: 11 }}>
                    <Placemark geometry={[54.187369, 45.166664]} />
                </Map>
            </YMaps>
            </div>
        </div>
        </>
    )
}

export default Mordva