import React, { useState, useRef , useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Contact (props) {
    return (
        <div className='containerContactsPage'>
            <div className='infoContactsPage'>
                <div className='headerContacts'>
                    <p>КОНТАКТЫ</p>
                </div>
                <div className='mobilePhoneContacts'>
                    <img src='/img/phoneContacts.png'/>
                    <p>{props.phone}</p>
                </div>
                <div className='timeContacts'>
                    <img src='/img/timeContacts.png'/>
                    <p>{props.time}</p>
                </div>
                <div className='locationContacts'>
                    <img src='/img/locationContacts.png'/>
                    <p>{props.location}</p>
                </div>
            </div>

            <div className="containerMapContactsPage">
                <YMaps>
                    <Map 
                    className="mapContactsPage"
                    defaultState={{ center: [51.521924, 46.029397], zoom: 11 }}>
                        <Placemark geometry={[51.521924, 46.029397]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

function Contacts () {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Саратовмелиоводхоз");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

    return(
        <>
        {selectBrancheData && (
            <Contact
                key={selectBrancheData.idBranch} 
                phone={selectBrancheData.phoneBranch} 
                time={selectBrancheData.workingHours} 
                location={selectBrancheData.addressBranch} 
            />
        )}
        </>
    )
}

export default Contacts