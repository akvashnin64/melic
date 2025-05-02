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
                    defaultState={{ center: [54.299199, 48.336234], zoom: 11 }}>
                        <Placemark geometry={[54.299199, 48.336234]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}


const Uliyanovsk = () => {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Ульяновский филиал");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

    return(
        <>
        <div className="mainHeaderBranche">
            <p>УЛЬЯНОВСКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p><span className="boldText500">Ульяновский филиал</span> ФГБУ «Управление «Саратовмелиоводхоз» создан на базе ФГБУ «Управление «Ульяновскмелиоводхоз» путем присоединения данного учреждения к ФГБУ «Управление «Саратовмелиоводхоз» на основании Приказа Министерства сельского хозяйства российской Федерации от 08 февраля 2021 года  №61. </p>
            <img id="uliyanovskPicture" src="/img/uliyanovsk1.png"/>
        </div>

        <div className="headerFunctionBranche">
            <p>ВИДЫ ДЕЯТЕЛЬНОСТИ:</p>
        </div>
        <div className="function">
            <div>
                <p>Осуществление мероприятий по реализации федеральных целевых программв сфере мелиорации земель.</p>
            </div>
            <div>
                <p>Эксплуатация государственных мелиоративных систем, гидротехнических сооружений и другого государственного имущества в управлении учреждения.</p>
            </div>
            <div>
                <p>Обследование мелиорированных земель в рамках ведения учета мелиорированных земель.</p>
            </div>
            <div>
                <p>Оценка технического состояния государственных мелиоративных систем и гидротехнических сооружений при паспортизации.</p>
            </div>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        
        <div className="containerLeftChannelsBrancheV3">
            <div className="leftChannelsBrancheV3">
                <img src="/img/plant.png"/>
                <p>В НАСТОЯЩЕЕ ВРЕМЯ ОСНОВНАЯ ДЕЯТЕЛЬНОСТЬ УЧРЕЖДЕНИЯ СОСРЕДОТОЧЕНА В СТАРОМАЙНСКОМ РАЙОНЕ УЛЬЯНОВСКОЙ ОБЛАСТИ,ГДЕ РАСПОЛОЖЕНА СТАРОМАЙНСКАЯ ОРОСИТЕЛЬНАЯ СИСТЕМА, НАХОДЯЩАЯСЯ В ФЕДЕРАЛЬНОЙ СОБСТВЕННОСТИ И ОПЕРАТИВНОМ УПРАВЛЕНИИ УЧРЕЖДЕНИЯ, ОБСЛУЖИВАЮЩАЯ 4 177 ГА ОРОШАЕМЫХ ЗЕМЕЛЬ</p>
            </div>
            <div className="leftChannelsBrancheV3">
                <img src="/img/water.png"/>
            </div>

            <div className="containerTextChannelsBranche">
                <div className="textChannelsBranche">
                    <p className="firstTextChannelsBranche">480 КМ</p>
                    <p className="secondTextChannelsBranche">
                        ДЛИНА КУЙБЫШЕВСКОГО ВОДОХРАНИЛИЩА (В ПРЕДЕЛАХ УЛЬЯНОВСКОЙ ОБЛАСТИ - 161 КМ)</p>
                </div>
                <div className="textChannelsBranche">
                    <p className="firstTextChannelsBranche">57,3 КМ³</p>
                    <p className="secondTextChannelsBranche">
                        ОБЪЕМ КУЙБЫШЕВСКОГО ВОДОХРАНИЛИЩА (В ПРЕДЕЛАХ УЛЬЯНОВСКИЙ ОБЛАСТИ - 18,74³)</p>
                </div>
                <div className="textChannelsBranche">
                    <p className="firstTextChannelsBranche">1663 КМ</p>
                    <p className="secondTextChannelsBranche">
                        РАССТОЯНИЯ ОТ УСТЬЯ Р. ВОЛГА ДО УЧАСТКА ЗАБОРА ВОДЫ</p>
                </div>
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

export default Uliyanovsk