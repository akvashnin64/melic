import directorsData from './DirectorsData';
import React from 'react';

function Buf (){
    return(
        <div className='mainHeaderDirector'>
            <p>РУКОВОДИТЕЛИ</p>
        </div>
    )}

function OneDirector(props){
    return(
        <div className='blockDirector'>
            <p className='nameDirector'>{props.name}</p>
            <p className='workedDirector'>{props.worked}</p>
        </div>
    )}

function Directors () {
    const directorComponents = directorsData.map(director => {
        return(
            <OneDirector name={director.name} worked={director.worked}/>
        )
    })

    return(
        <>
            <Buf />
            <div className='containerDirector'>
                <div className='headerDirector'>
                    <p>РУКОВОДИТЕЛИ ОБЛАСТНЫХ ОРГАНОВ УПРАВЛЕНИЯ МЕЛИОРАЦИЕЙ И ВОДНЫМ ХОЗЯЙСТВОМ САРАТОВСКОЙ ОБЛАСТИ</p>
                </div>
                <div className='containerBlocksDirector'>
                    {directorComponents}
                </div>
            </div>
        </>
    )}

export default Directors