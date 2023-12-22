import React from 'react';
import { Link } from "react-router-dom";
import linksData from './LinksData';

const UserLink = ({picture, text}) => (
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
        <Link to={link.link}>
            <UserLink
            key={link.id}
            picture={link.picture}
            text={link.text}
          />
        </Link>
      ))}
    </div>
    </>
);

export default Links