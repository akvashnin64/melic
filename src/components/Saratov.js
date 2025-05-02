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
                    defaultState={{ center: [51.758422, 48.562870], zoom: 11 }}>
                        <Placemark geometry={[51.758422, 48.562870]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

const Saratov = () => {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Саратовский обводнительный канал");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

    return(
        <>
        <div className="mainHeaderBranche">
            <p>САРАТОВСКИЙ ФИЛИАЛ</p>
        </div>

        <div className="textAboutBranche">
            <p>Сегодня Саратовский обводнительный канал — <span className="boldText500">самый значимый филиал</span> ФГБУ «Управление «Саратовмелиоводхоз». Назначение Саратовского оросительно-обводнительного канала им. Е.Е. Алексеевского - <span className="boldText500">подача волжской воды на орошение и обводнение земель,</span> водоснабжение населенных пунктов в бассейнах рек Еруслан, Большого и Малого Узеней и Малой Чалыклы в пределах Саратовской области, а также подача воды в Республику Казахстан.</p>
            <img className="firstImageBranche" src="/img/saratov1.jpg"/>
            <img className="secondImageBranche" src="/img/saratov2.jpg"/>
        </div>

        <div className="headerFunctionBranche">
            <p>В СОСТАВ ФИЛИАЛА ВХОДЯТ:</p>
        </div>
        <div className="function5Elements">
            <div>
                <p>Головной водозабор — начало Саратовского канала. Общая производительность водозабора более 100 кубометров в секунду.</p>
            </div>
            <div>
                <p>Магистральный канал с 5 перекачивающими насосными станциями, производящими подачу воды на общую высоту 92 м. Протяженность - 41 км, пропускная способность - 51 м3/с.</p>
            </div>
            <div>
                <p>Сулакское водохранилище емкостью 115 млн м3, площадью 20 км2.</p>
            </div>
            <div>
                <p>Самотечная часть канала - проложена в черте города Балаково. Протяженность канала 40,6 км.</p>
            </div>
            <div>
                <p>Ветвь магистрального канала ВМК 1 для подачи воды в реки Еруслан и Малый Узень протяженностью 32,7 км, пропускной способностью 32 м3/с; Ветвь магистрального канала ВМК 2 для подачи воды в реку Большой Узень, протяженностью - 17,9 км, пропускной способностью - 11,0 м3/с и далее водоподающие тракты малых рек Левобережья области общей протяженностью более 1000 км.</p>
            </div>
        </div>

        <div className="lineBranche"><hr></hr></div>

        <div className="bannerBranche">
            <div className="bannerBrancheImage">
                <img src="/img/saratov3.jpg"/>
            </div>
            <div className="headerBannerBranche">
                <p>ДЛЯ АККУМУЛЯЦИИ ВОЛЖСКОЙ ВОДЫ ПОСТРОЕНЫ ВОДОХРАНИЛИЩА:</p>
            </div>
            <div className="propertyBannerBranche">
                <div>
                    <p className="volumePropertyBannerBranche">115 М³/С</p>
                    <p className="namePropertyBannerBranche">СУЛАКСКОЕ</p>
                </div>
                <div>
                    <p className="volumePropertyBannerBranche">5,67 М³/С</p>
                    <p className="namePropertyBannerBranche">ТОЛСТОВСКОЕ</p>
                </div>
                <div>
                    <p className="volumePropertyBannerBranche">2,73 М³/С</p>
                    <p className="namePropertyBannerBranche">НОВО-УСПЕНСКОЕ</p>
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

export default Saratov