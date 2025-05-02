import React, { useState , useEffect } from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Contacts(props){
    return (
        <div className="containerContactsBranche">

            <div className="contactsBranche">
                <div className='headerContactsBranche'>
                    <p>КОНТАКТЫ</p>
                </div>
                <div className='mobilePhoneContactsBranche'>
                    <img src='/img/phoneContacts.png'/>
                    <p>{props.phone}</p> 
                </div>
                <div className='emailContactsBranche'>
                    <img src='/img/emailContacts.png'/>
                    <p>{props.email}</p>
                </div>
                <div className='locationContactsBranche'>
                    <img src='/img/locationContacts.png'/>
                    <p>{props.location}</p>
                </div>
            </div>

            <div className="containerMap">
                <YMaps>
                    <Map 
                    className="map"
                    defaultState={{ center: [51.697410, 46.741258], zoom: 11 }}>
                        <Placemark geometry={[51.697410, 46.741258]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

const Privolg = () => {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Приволжский филиал");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

    return(
        <>
        <div className="mainHeaderBranche">
            <p>ПРИВОЛЖСКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>Главная задача Приволжского филиала — <span className="boldText500">создание высоких и устойчивых урожаев</span> сельскохозяйственных культур на орошаемых полях при условии эффективного использования воды и земельных ресурсов. </p>
            <img className="firstImageBranche" src="/img/privolg1.jpg"/>
            <img className="secondImageBranche" src="/img/privolg2.jpg"/>
        </div>

        <div className="headerFunctionBranche">
            <p>ОСНОВНЫЕ ПРОИЗВОДСТВЕННЫЕ ФУНКЦИИ:</p>
        </div>
        <div className="function">
            <div>
                <p>Подача воды на орошение сельхозкультур всех категорий водопотребителей</p>
            </div>
            <div>
                <p>Содержание каналов, насосных станций в технически исправном состоянии</p>
            </div>
            <div>
                <p>Своевременное проведение уходных и ремонтных работ на объектах балансовой принадлежности филиала</p>
            </div>
            <div>
                <p>Выполнение земляных работ любого вида сложности специализированной землеройной техникой</p>
            </div>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        
        <div className="containerChannelsBranche">
            <div className="containerLeftChannelsBranche">
                <div className="leftChannelsBranche">
                    <img src="/img/water.png"/>
                    <p>13 ВОДОХРАНИЛИЩ ОБЩЕЙ ЕМКОСТЬЮ 62,8 МЛН КУБИЧЕСКИХ МЕТРОВ ВОДЫ</p>
                </div>
                <div className="leftChannelsBranche">
                    <img src="/img/plant.png"/>
                    <p>ФИЛИАЛ ОБСЛУЖИВАЕТ МАРКСОВСКИЙ РАЙОН С ОРОШАЕМОЙ ПЛОЩАДЬЮ 40 853 ГА. И СОВЕТСКИЙ РАЙОН — ОРОШАЕМОЙ ПЛОЩАДЬЮ 12 276 ГА.</p>
                </div>
            </div>

            <div className="structureBranche">
                <p className="headerStructureBranche">В СОСТАВ ФИЛИАЛА ВХОДИТ:</p>
                
                <div className="pointsStructureBranche">
                    <div className="onePointStructureBranche">
                        <p className="numberStructureBranche">2</p>
                        <p className="textStructureBranche">головные насосные станции</p>
                    </div>
                    <div className="onePointStructureBranche">
                        <p className="numberStructureBranche">59</p>
                        <p className="textStructureBranche">подкачивающих насосных станций</p>
                    </div>
                    <div className="onePointStructureBranche">
                        <p className="numberStructureBranche">7</p>
                        <p className="textStructureBranche">перекачивающих насосных станции</p>
                    </div>
                </div>

                <p className="infoStructureBranche">МАГИСТРАЛЬНЫЕ, РАСПРЕДЕЛИТЕЛЬНЫЕ, ХОЗЯЙСТВЕННЫЕ И СБРОСНЫЕ КАНАЛЫ ПРОТЯЖЕННОСТЬЮ — 248,05 КМ</p>
            </div>
        </div>

        {selectBrancheData && (
            <Contacts 
                key={selectBrancheData.idBranch} 
                phone={selectBrancheData.phoneBranch} 
                email={selectBrancheData.emailBranch} 
                location={selectBrancheData.addressBranch} 
            />
        )}
        </>
    )
}

export default Privolg