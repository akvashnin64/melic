import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Kalininsk = () => {
    return(
        <>
        <div className="mainHeaderBranche">
            <p>КАЛИНИНСКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>Калининский филиал ФГБУ «Управление «Саратовмелиоводхоз» был создан в 1976 году в период коренного улучшения земель, подверженных неблагоприятным воздействиям ветра и воды, и рационального их использования. На сегодняшний день численность сотрудников филиала составляет 50 человек.</p>
            <img src="/img/kalininsk1.jpg"/>
            <img src="/img/kalininsk2.jpg"/>
        </div>

        <div className="headerFunctionBranche">
            <p>ВИДЫ ДЕЯТЕЛЬНОСТИ:</p>
        </div>
        <div className="function">
            <div>
                <p>Оказание услуг по подаче воды водопользователям, сельхозпроизводителям и дачным кооперативам</p>
            </div>
            <div>
                <p>Оказание необходимых транспортных, погрузо-разгрузочных и технических услуг сельскохозяйственным товаропроизводителям и другим юридическим и физическим лицам</p>
            </div>
            <div>
                <p>Земляные работы</p>
            </div>
            <div>
                <p>Выполнение работ по подготовке к поливу сельхозкультур</p>
            </div>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        
        <div className="containerLeftChannelsBrancheV2">
            <div className="leftChannelsBranche">
                <img src="/img/water.png"/>
                <p>НА БАЛАНСЕ КАЛИНИНСКОГО ФИЛИАЛА ИМЕЕТСЯ 13 ВОДОХРАНИЛИЩ С ОБЩИМ ОБЪЕМОМ ВОДЫ 52,7 МЛН МЕТРОВ КУБИЧЕСКИХ.</p>
            </div>
            <div className="leftChannelsBranche">
                <img src="/img/plant.png"/>
                <p>18 СТАЦИОНАРНЫХ ЭЛЕКТРИФИЦИРОВАННЫХ НАСОСНЫХ СТАНЦИЙ, КОТОРЫЕ ИСПОЛЬЗУЮТСЯ ДЛЯ ОРОШЕНИЯ СЕЛЬСКОХОЗЯЙСТВЕННЫХ КУЛЬТУР.</p>
            </div>
        </div>

        <div className="containerContactsBranche">

            <div className="contactsBranche">
                <div className='headerContactsBranche'>
                    <p>КОНТАКТЫ</p>
                </div>
                <div className='mobilePhoneContactsBranche'>
                    <img src='/img/phoneContacts.png'/>
                    <p>8 (84549) 3-43-96</p>
                </div>
                <div className='emailContactsBranche'>
                    <img src='/img/emailContacts.png'/>
                    <p>Kuos2008@yandex.ru</p>
                </div>
                <div className='locationContactsBranche'>
                    <img src='/img/locationContacts.png'/>
                    <p>412484, Саратовская область, г. Калининск, ул. Советская, д. 54</p>
                </div>
            </div>

            <div className="containerMap">
            <YMaps>
                <Map 
                className="map"
                defaultState={{ center: [51.489645, 44.475518], zoom: 11 }}>
                    <Placemark geometry={[51.489645, 44.475518]} />
                </Map>
            </YMaps>
            </div>
        </div>
        </>
    )
}

export default Kalininsk