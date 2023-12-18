import React from 'react';
import { Link } from 'react-router-dom';

const getImagePath = (namePic) => {
    return `/img/${namePic}.jpg`;
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