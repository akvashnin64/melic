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
                    defaultState={{ center: [51.383844, 46.039458], zoom: 11 }}>
                        <Placemark geometry={[51.383844, 46.039458]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

const Partia = () => {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Гидрогеолого-мелиоративная партия");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

    return(
        <>
        <div className="mainHeaderBranche">
            <p>ГИДРОГЕОЛОГО-МЕЛИОРАТИВНАЯ ПАРТИЯ</p>
        </div>

        <div className="textAboutBranche">
            <p>Основной задачей ГМП является комплексное изучение <span className="boldText500">гидрогеологических и почвенно-мелиоративных условий орошаемых земель</span> с целью надзора за их мелиоративным состоянием, назначением мероприятий по предотвращению неблагоприятного влияния орошения на мелиоративную обстановку орошаемых земель. На базе Гидрогеолого-мелиоративной партии имеется <span className="boldText500">химико-бактериологическая лаборатория.</span></p>
            <img className="firstImageBranche" src="/img/partia1.jpg"/>
            <img className="secondImageBranche" src="/img/partia2.jpg"/>
        </div>

        <div className="headerFunctionBranche">
            <p>В СОСТАВ ФИЛИАЛА ВХОДЯТ:</p>
        </div>
        
        <div className="structure6Elements">

            <div className="oneElementStructure6Elements">
                <div className="headerStructure6Elements">
                    <p>Ровенский участок</p>
                </div>
                <div className="textStructure6Elements">
                    <img src="/img/water.png"/>
                    <p>14 стационарных насосных станций</p>
                </div>
                <div className="textStructure6Elements">
                    <img src="/img/plant.png"/>
                    <p>Орошаемых земель на площади 13,3 тысячи га.</p>
                </div>
            </div>

            <div className="oneElementStructure6Elements">
                <div className="headerStructure6Elements">
                    <p>Краснокутский участок</p>
                </div>
                <div className="textStructure6Elements">
                    <img src="/img/water.png"/>
                    <p>14 стационарных насосных станций</p>
                </div>
                <div className="textStructure6Elements">
                    <img src="/img/plant.png"/>
                    <p>Орошаемых земель на площади 7,5 тысяч га.</p>
                </div>
            </div>

            <div className="oneElementStructure6Elements">
                <div className="headerStructure6Elements">
                    <p>Лебедевское водохранилище</p>
                </div>
                <div className="textStructure6Elements">
                    <img src="/img/water.png"/>
                    <p>Объемом 37 млн метров кубических воды аккумулирует паводковые воды для орошения земель и обводнения населенных пунктов.</p>
                </div>
            </div>

            <div className="oneElementStructure6Elements">
                <div className="headerStructure6Elements">
                    <p>Ахматская переливная плотина</p>
                </div>
                <div className="textStructure6Elements">
                    <img src="/img/water.png"/>
                    <p>Объемом 2,5 млн метров кубических воды аккумулирует паводковые воды и обеспечивает обводнение населенных пунктов.</p>
                </div>
            </div>

            <div className="oneElementStructure6Elements">
                <div className="headerStructure6Elements">
                    <p>Питерский участок</p>
                </div>
                <div className="textStructure6Elements">
                    <img src="/img/water.png"/>
                    <p>7 стационарных насосных станций</p>
                </div>
                <div className="textStructure6Elements">
                    <img src="/img/plant.png"/>
                    <p>Орошаемых земель на площади 4,2 тысячи га.</p>
                </div>
            </div>

            <div className="oneElementStructure6Elements">
                <div className="headerStructure6Elements">
                    <p>Малоузенское водохранилище</p>
                </div>
                <div className="textStructure6Elements">
                    <img src="/img/water.png"/>
                    <p>Объемом 18 млн метров кубических воды аккумулирует паводковые воды и обеспечивает обводнение населенных пунктов</p>
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

export default Partia