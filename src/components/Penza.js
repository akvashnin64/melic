import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Penza = () => {
    return(
        <>
        <div className="mainHeaderBranche">
            <p>ПЕНЗЕНСКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>Пензенский филиал ФГБУ «Управление «Саратовмелиоводхоз» создан 20 августа 2021г. на основании приказа Министерства сельского хозяйства Российской Федерации № 61 от 08 февраля 2021г. «О реорганизации федерального государственного бюджетного учреждения «Управление мелиорации земель и сельскохозяйственного водоснабжения по Саратовской области». Основной функцией Пензенского филиала в настоящее время является обеспечение безаварийной работы мелиоративных систем и отдельно расположенных гидротехнических сооружений.</p>
            <img src="/img/penza1.jpg"/>
            <img src="/img/penza2.jpg"/>
        </div>

        <div className="headerFunctionBranche">
            <p>ВИДЫ ДЕЯТЕЛЬНОСТИ:</p>
        </div>
        <div className="function3Elements">
            <div>
                <p>Выполнение государственного задания в полном объеме. Мелиоративные системы подготовлены к вегетационному периоду при полном соблюдении правил эксплуатации в соответствии с нормами, стандартами и требованиями по охране окружающей среды.</p>
            </div>
            <div>
                <p>Министерством сельского хозяйства Пензенской области при участии Пензенского филиала проводится инвентаризация мелиоративных систем и мелиорированных земель сельскохозяйственного назначения.</p>
            </div>
            <div>
                <p>Совместно с Министерством сельского хозяйства Пензенской области проводится работа по реализации государственной программы Пензенской области «Развитие Агропромышленного комплекса Пензенской области» - вовлечение в оборот выбывших сельскохозяйственных угодий за счет проведения культуртехнических мероприятий. С момента действия этой программыс 2014 года всего по гидромелиорации было введено 11756 га земель.</p>
            </div>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        
        <div className="containerLeftChannelsBrancheV2">
            <div className="leftChannelsBranche">
                <img src="/img/water.png"/>
                <p>ВОДОИСТОЧНИКИ ПРЕДСТАВЛЯЮТ СОБОЙ ВОДОХРАНИЛИЩА И ПРУДЫ, ОБРАЗОВАННЫЕ ГИДРОТЕХНИЧЕКИМИ СООРУЖЕНИЯМИ. ОБЩИЙ ОБЪЁМ ПРУДОВ И ВОДОХРАНИЛИЩ СОСТАВЛЯЕТ 79,990 МЛН. МЕТРОВ КУБИЧЕСКИХ</p>
            </div>
            <div className="leftChannelsBranche">
                <img src="/img/plant.png"/>
                <p>34 МЕЛИОРАТИВНЫЕ СИСТЕМЫ ОБЩЕЙ ПЛОЩАДЬЮ 26 618 ГА. ИЗ НИХ 32 - МЕЖХОЗЯЙСТВЕННЫЕ ОРОСИТЕЛЬНЫЕ СИСТЕМЫ (ОБЩЕЙ ПЛОЩАДЬЮ 25 807 ГА)</p>
            </div>
        </div>

        <div className="containerContactsBranche">

            <div className="contactsBranche">
                <div className='headerContactsBranche'>
                    <p>КОНТАКТЫ</p>
                </div>
                <div className='mobilePhoneContactsBranche'>
                    <img src='/img/phoneContacts.png'/>
                    <p>8 (8412) 67-73-72</p>
                </div>
                <div className='emailContactsBranche'>
                    <img src='/img/emailContacts.png'/>
                    <p>melio@bk.ru</p>
                </div>
                <div className='locationContactsBranche'>
                    <img src='/img/locationContacts.png'/>
                    <p>440015, Пензенская область, г. Пенза, ул.Аустрина, д.5А</p>
                </div>
            </div>

            <div className="containerMap">
            <YMaps>
                <Map 
                className="map"
                defaultState={{ center: [53.253109, 45.017849], zoom: 11 }}>
                    <Placemark geometry={[53.253109, 45.017849]} />
                </Map>
            </YMaps>
            </div>
        </div>
        </>
    )
}

export default Penza