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
                    defaultState={{ center: [52.065964, 47.927079], zoom: 11 }}>
                        <Placemark geometry={[52.065964, 47.927079]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

function Balakovo () {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Балаковский филиал");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);


    return(
        <>
        <div className="mainHeaderBranche">
            <p>БАЛАКОВСКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>В зоне деятельности филиала находится Балаковская оросительная система, которая расположена на территории Балаковского района Саратовской области <span className="boldText500">в границах рек Волги, Малого Иргиза, Большого Иргиза, Кулечихи.</span> В мелиоративный комплекс филиала входят следующие объекты: Саратовский канал им. Алексеевского Е.Е. (Головное водозаборное сооружение Саратовского оросительно-обводнительного канала), Духовницкий и Пугачевский участки. В зоне обслуживания филиала - <span className="boldText500">48,6 тысячи гектаров орошаемых земель.</span> Источником орошения является Волгоградское водохранилище. Головное водозаборное сооружение Саратовского оросительно-обводнительного канала находится в черте г. Балаково с 3 сороудерживающими решетками, пропускной способностью при нормальном режиме 56 м3/с. Водоисточником является Волгоградское водохранилище на реке Волга, из которого самотеком вода поступает по 30 км русла канала до Сулакского водохранилища, где с помощью переливной плотины поддерживается постоянный необходимый уровень для работы головной насосной станции.</p>
            <img className="firstImageBranche" src="/img/balakovo1.jpg"/>
            <img className="secondImageBranche" src="/img/balakovo2.jpg"/>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        <div className="containerChannelsBranche">
            <div className="containerLeftChannelsBranche">
                <div className="leftChannelsBranche">
                    <img src="/img/water.png"/>
                    <p>НА БАЛАНСЕ ФИЛИАЛА СОСТОИТ МАРЬЕВСКОЕ ВОДОХРАНИЛИЩЕ С ОБЪЕМОМ 20,4 МЛН МЕТРОВ КУБИЧЕСКИХ.</p>
                </div>
                <div className="leftChannelsBranche">
                    <img src="/img/plant.png"/>
                    <p>ПРОТЯЖЕННОСТЬ МАГИСТРАЛЬНОГО КАНАЛА ПУГАЧЕСКОЙ И ДУХОВНИЦКОЙ ОРОСИТЕЛЬНЫХ СИСТЕМ 23 000 ПОГОННЫХ МЕТРА, ПРИВЯЗАННАЯ ПЛОЩАДЬ ОРОШЕНИЯ 16300 ГА.</p>
                </div>
            </div>

            <div className="rightChannelsTextAboutBranche">
                <p>На балансе Балаковского филиала находится <span className="boldText500">12 насосных станций,</span> в том числе 2 головные насосные станции ГНС-1 и ГНС-2. Протяженность канала Малой Балаковской оросительной системы <span className="boldText500">19 400 погонных метров, привязанная площадь орошения 3 800 га.</span> Протяженность магистрального канала Большой Балаковской оросительной системы 44 200 погонных метров, привязанная площадь орошения 15 100 га.</p>            
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

export default Balakovo