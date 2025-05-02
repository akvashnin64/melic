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
                defaultState={{ center: [54.187369, 45.166664], zoom: 11 }}>
                    <Placemark geometry={[54.187369, 45.166664]} />
                </Map>
            </YMaps>
            </div>
        </div>
    )
}

const Mordva = () => {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Филиал по республике Мордовия");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

    return(
        <>
        <div className="mainHeaderBranche">
            <p>ФИЛИАЛ ПО РЕСПУБЛИКЕ МОРДОВИЯ</p>
        </div>

        <div className="textAboutBranche">
            <p>Площадь <span className="boldText500">мелиорированных земель,</span> обслуживаемая мелиоративными системами (с использованием ГТС) федеральной собственности, находящимися  в оперативном управлении  филиала по Республике Мордовия ФГБУ «Управление «Саратовмелиоводхоз» <span className="boldText500">составляет -  23540 га.</span></p>
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

export default Mordva