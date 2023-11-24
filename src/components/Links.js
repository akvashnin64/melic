import React from 'react';
import linksData from './LinksData';

const Link = ({picture, text}) => (
        <div className='link'>
            <img src={picture} alt={text}></img>
            <p>{text}</p>
        </div>
);

const Links = () => (
    <>
    <div className='containerLinks'>
        <div className='textLinks'>
            <p>ПОЛЕЗНЫЕ ССЫЛКИ</p>
        </div>
    </div>
    <div className='containerLink'>
        {linksData.map((link, index) => (
        <Link key={index} {...link} />
      ))}
    </div>
    </>
);

export default Links