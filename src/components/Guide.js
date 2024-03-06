import React, { useState, useEffect } from 'react';
  
function Guide(props){
    return(
        <div className='guide'>
            <div className='title'>
                <p>{props.title.toUpperCase()}</p>
            </div>
            <div className='containerGuide'>
                <div className='director'>
                    <p>Директор: {props.director}</p>
                </div>
                <div className='location'>
                    <img src='/img/location-icon.png'/>
                    <p>{props.location}</p>
                </div>
                <div className='phone'>
                    <img src='/img/phone-icon.png'/>
                    <p>{props.phone}</p>
                </div>
                <div className='email'>
                    <img src='/img/email-icon.png'/>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )}

function Guides () {
    const [guideData, setGuideData] = useState([]);

    useEffect(() => {
        // Асинхронный запрос на сервер при монтировании компонента
        fetch('http://89.111.154.224:3001/getBranches')
          .then(response => response.json())
          .then(data => {
            setGuideData(data.map(guide => ({
              ...guide,
            })));
          })
          .catch(error => console.error('Ошибка при запросе филиалов: ', error));
      }, []);

    const guidesComponents = guideData.map(guide => {
        return(
            <Guide key={guide.idBranch} title={guide.nameBranch} director={guide.directorBranch} location={guide.addressBranch} phone={guide.phoneBranch} email={guide.emailBranch}/>
        )
    })

    return(
        <>
            <div className='headerGuide'>
                <p>СПРАВОЧНИК</p>
            </div>
            <div className='containerGuide'>
                {guidesComponents}
            </div>
        </>
    )}


export default Guides;