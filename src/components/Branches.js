import React from 'react';
import { Link } from "react-router-dom";

import brancheData from './BrancheData';
import Branche from './Branche';

function Buf (){
    return(
        <div id='forScroll' className='containerBranches'>
            <div className='textBranches'>
                <p>ФИЛИАЛЫ</p>
            </div>
        </div>
    )}

function Branches () {
    const brancheComponents = brancheData.map(branche => {
        return(
           <Link className='linkBranche' to={branche.location}>
                <Branche key={branche.id} namePic={branche.namePic} text={branche.text}/>
           </Link>
            
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
