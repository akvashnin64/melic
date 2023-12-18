import React from 'react';

import brancheData from './BrancheData';
import Branche from './Branche';

function Buf (){
    return(
        <div className='containerBranches'>
            <div className='textBranches'>
                <p>ФИЛИАЛЫ</p>
            </div>
        </div>
    )}

function Branches () {
    const brancheComponents = brancheData.map(branche => {
        return(
           
            <Branche key={branche.id} location={branche.location} namePic={branche.namePic} text={branche.text}/>
        )
    })

    return(
        <>
            <Buf />
            <div className='containerBranche'>
                {brancheComponents}
            </div>
        </>
    )}

export default Branches
