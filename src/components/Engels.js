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
            defaultState={{ center: [51.395394, 46.031463], zoom: 11 }}>
                <Placemark geometry={[51.395394, 46.031463]} />
            </Map>
        </YMaps>
        </div>
        </div>
    )
}

function Engels () {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();
    
    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Энгельсский филиал");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

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

export default Engels