import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Engels = () => {
    return(
        <>
        <div className="mainHeaderBranche">
            <p>ЭНГЕЛЬССКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>Энгельсская Оросительная система – одна из старейших оросительных систем Саратовского Заволжья введённая в эксплуатацию в <span className="boldText500">1956 году.</span> Главной задачей Энгельсского филиала является <span className="boldText500">создание условий для получения высоких и устойчивых урожаев </span>сельскохозяйственных культур на орошаемых полях при условии эффективного использования воды и земельных ресурсов.</p>
            <img className="firstImageBranche" src="/img/engels1.jpg"/>
            <img className="secondImageBranche" src="/img/engels2.jpg"/>
        </div>

        <div className="headerFunctionBranche">
            <p>ОСНОВНЫЕ ПРОИЗВОДСТВЕННЫЕ ФУНКЦИИ:</p>
        </div>
        <div className="function">
            <div>
                <p>Подача воды на орошение сельхозкультур всех категорий водопотребителей</p>
            </div>
            <div>
                <p>Подача воды на пополнение прудов</p>
            </div>
            <div>
                <p>Содержание каналов, насосных станций в технически исправном состоянии</p>
            </div>
            <div>
                <p>Своевременное проведение уходных и ремонтных работ на объектах балансовой принадлежности филиала</p>
            </div>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        <div className="containerChannelsBranche">
            <div className="containerLeftChannelsBranche">
                <div className="leftChannelsBranche">
                    <img src="/img/water.png"/>
                    <p>В ЗОНЕ ДЕЯТЕЛЬНОСТИ ЭНГЕЛЬССКОГО ФИЛИАЛА НАХОДЯТСЯ, МЕЧЕТКИНСКОЕ, ТЕРНОВСКОЕ И ТАРЛЫКОВСКОЕ ВОДОХРАНИЛИЩА С ОБЩИМ <span className="boldText700">ОБЪЕМОМ 17,4 МЛН КУБОМЕТРОВ ВОДЫ</span></p>
                </div>
                <div className="leftChannelsBranche">
                    <img src="/img/plant.png"/>
                    <p>ОБЩАЯ ПЛОЩАДЬ ОРОШЕНИЯ СОСТАВЛЯЕТ <span className="boldText700">36 400 ГА</span></p>
                </div>
            </div>

            <div className="structureBranche">
                <p className="headerStructureBranche">В СОСТАВ ФИЛИАЛА ВХОДИТ:</p>
                
                <div className="pointsStructureBranche">
                    <div className="onePointStructureBranche">
                        <p className="numberStructureBranche">5</p>
                        <p className="textStructureBranche">головных насосных станции</p>
                    </div>
                    <div className="onePointStructureBranche">
                        <p className="numberStructureBranche">15</p>
                        <p className="textStructureBranche">подкачивающих насосных станций</p>
                    </div>
                    <div className="onePointStructureBranche">
                        <p className="numberStructureBranche">7</p>
                        <p className="textStructureBranche">перекачивающих насосных станции</p>
                    </div>
                </div>

                <p className="infoStructureBranche">МАГИСТРАЛЬНЫЕ, РАСПРЕДЕЛИТЕЛЬНЫЕ, ХОЗЯЙСТВЕННЫЕ И СБРОСНЫЕ КАНАЛЫ ПРОТЯЖЕННОСТЬЮ — 153,00 КМ</p>
            </div>
        </div>

        <div className="containerContactsBranche">

            <div className="contactsBranche">
                <div className='headerContactsBranche'>
                    <p>КОНТАКТЫ</p>
                </div>
                <div className='mobilePhoneContactsBranche'>
                    <img src='/img/phoneContacts.png'/>
                    <p>8 (8453) 54-49-85</p>
                </div>
                <div className='emailContactsBranche'>
                    <img src='/img/emailContacts.png'/>
                    <p>voda_en@mail.ru</p>
                </div>
                <div className='locationContactsBranche'>
                    <img src='/img/locationContacts.png'/>
                    <p>413123, Саратовская область, Энгельсский район, р.п. Приволжский, ул.Мелиоративная</p>
                </div>
            </div>

            <div className="containerMap">
            <YMaps>
                <Map 
                className="map"
                defaultState={{ center: [51.395394, 46.031463], zoom: 11 }}>
                    <Placemark geometry={[51.395394, 46.031463]} />
                </Map>
            </YMaps>
            </div>
        </div>
        </>
    )
}

export default Engels