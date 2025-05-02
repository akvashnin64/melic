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
                    defaultState={{ center: [53.208219, 50.131482], zoom: 11 }}>
                        <Placemark geometry={[53.208219, 50.131482]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

const Samara = () => {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Самарский филиал");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

    return(
        <>
        <div className="mainHeaderBranche">
            <p>САМАРСКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>
                С 19.08.2021 федеральное государственное бюджетное учреждение «Управление мелиорации земель и сельскохозяйственного водоснабжения по Самарской области» реорганизовано путем присоединения к федеральному государственному бюджетному учреждению «Управление мелиорации земель и сельскохозяйственного водоснабжения по Саратовской области». (приказ Минсельхоза РФ от 08.02.2021г. № 61).
                <br></br>
                <br></br>
                Наиболее показательными районами Самарской области, где сохраняется мелиоративный фонд, являются Приволжский, Безенчукский и Ставропольский
            </p>
            <img className="firstImageBranche" src="/img/samara1.jpg"/>
            <img className="secondImageBranche" src="/img/samara2.jpg"/>
        </div>

        <div className="lineBranche"><hr></hr></div>
        
        
        <div className="containerLeftChannelsBrancheV2">
            <div className="leftChannelsBranche">
                <img src="/img/water.png"/>
                <p>9 ГТС ВОДОХРАНИЛИЩ, ОБЩИЙ ПОЛНЫЙ ОБЪЕМ КОТОРЫХ СОСТАВЛЯЕТ 195 МЛН. М3, 71 НАСОСНАЯ СТАНЦИЯ, МОСТЫ И ПЕРЕЕЗДЫ – 63 ШТ., КАНАЛЫ, ПРОТЯЖЕННОСТЬЮ 600,4 КМ, ДАМБЫ – 9,9 КМ, ТРУБОПРОВОДЫ, ПРОТЯЖЕННОСТЬЮ 72,1 КМ И ДРУГИЕ СООРУЖЕНИЯ</p>
            </div>
            <div className="leftChannelsBranche">
                <img src="/img/plant.png"/>
                <p>В САМАРСКОЙ ОБЛАСТИ ПЛОЩАДЬ ОРОШАЕМЫХ СЕЛЬХОЗУГОДИЙ – 139,5 ТЫС. ГА, В СЕЛЬСКОХОЗЯЙСТВЕННОМ ПРОИЗВОДСТВЕ ИСПОЛЬЗУЕТСЯ 135,14 ТЫС. ГА</p>
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

export default Samara