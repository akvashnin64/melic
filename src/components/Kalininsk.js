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
                defaultState={{ center: [51.489645, 44.475518], zoom: 11 }}>
                    <Placemark geometry={[51.489645, 44.475518]} />
                </Map>
            </YMaps>
            </div>
        </div>
    )
}

const Kalininsk = () => {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Калининский филиал");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

    return(
        <>
        <div className="mainHeaderBranche">
            <p>КАЛИНИНСКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>Калининский филиал ФГБУ «Управление «Саратовмелиоводхоз» <span className="boldText500">был создан в 1976 году</span> в период коренного улучшения земель, подверженных неблагоприятным воздействиям ветра и воды, и рационального их использования. На сегодняшний день численность сотрудников филиала <span className="boldText500">составляет 50 человек.</span></p>
            <img className="firstImageBranche" src="/img/kalininsk1.jpg"/>
            <img className="secondImageBranche" src="/img/kalininsk2.jpg"/>
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

export default Kalininsk