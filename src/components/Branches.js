import React from 'react';
import brancheData from './BrancheData';
import newsData from './NewsData';
import Branche from './Branche';
import NewSlider from './NewSlider';
import AnonsSlider from './AnonsSlider'
import Links from './Links';
import Footer from './Footer'

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
            <Branche key={branche.id} namePic={branche.namePic} text={branche.text}/>
        )
    })

    return(
        <>
            <Buf />
            <div className='containerBranche'>
                {brancheComponents}
            </div>
            <NewSlider />  
            <AnonsSlider/>
            <Links />
            <Footer />
        </>
    )}

export default Branches
