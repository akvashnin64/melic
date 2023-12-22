import guideData from './GuideData';
import React from 'react';

function Buf (){
    return(
        <div className='headerGuide'>
            <p>СПРАВОЧНИК</p>
        </div>
    )}

function Guide(props){
    return(
        <div className='guide'>
            <div className='title'>
                <p>{props.title}</p>
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
    const guidesComponents = guideData.map(guide => {
        return(
            <Guide title={guide.title} director={guide.director} location={guide.location} phone={guide.phone} email={guide.email}/>
        )
    })

    return(
        <>
            <Buf />
            <div className='containerGuide'>
                {guidesComponents}
            </div>
        </>
    )}


export default Guides;