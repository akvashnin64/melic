import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Ershov = () => {
    return(
        <>
        <div className="mainHeaderBranche">
            <p>ЕРШОВСКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>В зоне действия Ершовского филиала <span className="boldText500">30,5 тысячи гектаров орошаемых земель. </span>На балансе числится <span className="boldTextAbout1">31 насосная станция,</span> в том числе 6 перекачивающих и 25 подкачивающих, 17 водохранилищ общим объемом 164,19 млн м3 воды, 167 км магистральных и распределительных каналов, 8,5 км поливных трубопроводов, Дергачевский водовод протяженностью 96,4 км, а также 4 производственных базы: две в г. Ершове, одна в р.п. Мокроус и одна в р.п. Дергачи</p>
            <img className="firstImageBranche" src="/img/ershov1.jpg"/>
            <img className="secondImageBranche" src="/img/ershov2.jpg"/>
        </div>

        <div className="headerFunctionBranche">
            <p>ОСНОВНЫЕ ПРОИЗВОДСТВЕННЫЕ ФУНКЦИИ:</p>
        </div>
        <div className="function">
            <div>
                <p>Подача воды на участки орошения согласно заключенным договорам с хозяйствами-сельхозпроизводителями</p>
            </div>
            <div>
                <p>Подача воды на пополнение прудов для питьевых и хозяйственных нужд согласно заключенным договорам с главами МО района</p>
            </div>
            <div>
                <p>Эксплуатация, ремонт и обслуживание гидротехнических сооружений</p>
            </div>
            <div>
                <p>Оказание услуг на проведение строительных, ремонтных и землеройных работ</p>
            </div>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        <div className="containerChannelsBranche">
            <div className="containerLeftChannelsBranche">
                <div className="leftChannelsBranche">
                    <img src="/img/water.png"/>
                    <p>ВСЕГО МАГИСТРАЛЬНЫМИ КАНАЛАМИ ФИЛИАЛА В 2015 ГОДУ БЫЛО <span className="boldText700">ПОДАНО 113 МЛН</span> КУБИЧЕСКИХ МЕТРОВ ВОДЫ.</p>
                </div>
                <div className="leftChannelsBranche">
                    <img src="/img/plant.png"/>
                    <p>НА БАЛАНСЕ ФИЛИАЛА ЭКСПЛУАТИРУЕТСЯ СЕЛЬХОЗУЧАСТОК - <span className="boldText700">2281 ГЕКТАР ЗЕМЛИ,</span> НА КОТОРОМ ВЫРАЩИВАЮТСЯ ОЗИМАЯ ПШЕНИЦА, ЯЧМЕНЬ, ПРОСО, ПОДСОЛНЕЧНИК.</p>
                </div>
            </div>

            <div className="rightChannelsBranche">
                <p className="headerChannelsBranche">КАНАЛЫ:</p>
                <div className="listChannels">
                    <p className="channel">Марьевский – 14,5 км</p>
                    <p className="channel">Краснянский- 7,7 км</p>
                    <p className="channel">Ерусланский- 48,9 км</p>
                    <p className="channel">Декабристский- 4,5 км</p>
                    <p className="channel">Межузенский- 24 км</p>
                    <p className="channel">Спартаковский- 17 км</p>
                    <p className="channel">ВМК-1 - 32,5 км</p>
                    <p className="channel">ВМК-2 - 17,9 км</p>
                </div>
                <p className="infoChannels">ДЕРГАЧЕСКИЙ ВОДОПРОВОД – 96,4 КМ</p>
                <p className="infoChannels">ОБЩАЯ ПРОТЯЖЕННОСТЬ КАНАЛОВ – 167 КМ</p>
            </div>
        </div>

        <div className="containerContactsBranche">

            <div className="contactsBranche">
                <div className='headerContactsBranche'>
                    <p>КОНТАКТЫ</p>
                </div>
                <div className='mobilePhoneContactsBranche'>
                    <img src='/img/phoneContacts.png'/>
                    <p>8 (84564) 5-12-09</p>
                </div>
                <div className='emailContactsBranche'>
                    <img src='/img/emailContacts.png'/>
                    <p>ershovref@rambler.ru</p>
                </div>
                <div className='locationContactsBranche'>
                    <img src='/img/locationContacts.png'/>
                    <p>413503, Саратовская область,г.Ершов, ул.Промышленная, д. 2</p>
                </div>
            </div>

            <div className="containerMap">
            <YMaps>
                <Map 
                className="map"
                defaultState={{ center: [51.349846, 48.308737], zoom: 11 }}>
                    <Placemark geometry={[51.349846, 48.308737]} />
                </Map>
            </YMaps>
            </div>
        </div>
        </>
    )
}

export default Ershov