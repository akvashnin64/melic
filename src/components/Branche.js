import React from 'react';

const getImagePath = (namePic) => {
    return `/img/${namePic}.png`;
}

function Branche(props){
    return(
        <div className='branche'>
            <img    
                src={getImagePath(props.namePic)}
            />
            <p>{props.text}</p>
        </div>
    )
}
    
export default Branche