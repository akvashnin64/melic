import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Engels = () => {
    return(
        <>
        <div className="mainHeaderBranche">
            <p>ЭНГЕЛЬССКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>Главной задачей Энгельсского филиала является <span className="boldText500">создание условий для получения высоких и устойчивых урожаев сельскохозяйственных культур</span> на орошаемых полях при условии эффективного использования воды и земельных ресурсов. Энгельсский филиал осуществляет эксплуатацию Энгельсской оросительной систем – <span className="boldText500">одной из самых старейших</span> оросительных систем Саратовского Заволжья. В ноябре 2015 года ЭОС отметила свой 50-летний юбилей.</p>
            <img className="firstImageBranche" src="/img/engels1.jpg"/>
            <img className="secondImageBranche" src="/img/engels2.jpg"/>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        
        <div className="containerLeftChannelsBrancheV2">
            <div className="leftChannelsBranche">
                <img src="/img/water.png"/>
                <p>В ЗОНЕ ДЕЯТЕЛЬНОСТИ ЭНГЕЛЬССКОЙ ОРОСИТЕЛЬНОЙ СИСТЕМЫ НАХОДЯТСЯ ТАРЛЫКОВСКОЕ, ТЕРНОВСКОЕ И МЕЧЕТКИНСКОЕ ВОДОХРАНИЛИЩА С ОБЩИМ ОБЪЕМОМ 14 МЛН КУБОМЕТРОВ ВОДЫ.</p>
            </div>
            <div className="leftChannelsBranche">
                <img src="/img/plant.png"/>
                <p>В НАСТОЯЩЕЕ ВРЕМЯ ЭНГЕЛЬССКИМ ФИЛИАЛОМ ОСУЩЕСТВЛЯЕТСЯ ПОДАЧА ВОДЫ НА ПОЛИВ СЕЛЬСКОХОЗЯЙСТВЕННЫХ КУЛЬТУР НА ПЛОЩАДИ 11 600 ГА.</p>
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
                defaultState={{ center: [51.758422, 48.562870], zoom: 11 }}>
                    <Placemark geometry={[51.758422, 48.562870]} />
                </Map>
            </YMaps>
            </div>
        </div>
        </>
    )
}

export default Engels