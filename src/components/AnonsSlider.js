import React, { useState } from 'react';
import anonsData from './AnonsData';
import { Link } from "react-router-dom";

const AnonsSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(anonsData.length);
  
    const handlePrevClick = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    };
  
    const handleNextClick = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const getImagePath = (namePic) => {
      return `/img/${namePic}.png`;
    };

    return (
        <div className="containerSlider">
        <div className="textSlider">
          <div><Link to='/announcements' className='headerSliderLink'>АНОНСЫ</Link></div>
            <div className='arrowNews'>
            <img
            src="/img/arrow-left.svg"
            alt="Left Arrow"
            style={{ opacity: currentPage > 0 ? 1 : 0.3 }}
            onClick={handlePrevClick}
            />
            <img
            src="/img/arrow-right.svg"
            alt="Right Arrow"
            style={{ opacity: currentPage < totalPages - 1 ? 1 : 0.3 }}
            onClick={handleNextClick}
            />
            </div>
        </div>
        <div className="banner2">
            {anonsData.slice(currentPage, currentPage + 1).map((anons, index) => (
            <div key={index} className="announcementsItem">
                <img src={getImagePath(anons.namePic)}/>
                <p id='text3'>{anons.titleAnons}</p>
                <p id='text4'>{anons.dateAnons}</p>
            </div>
            ))}
        </div>
        </div>
    );
    };
  
  export default AnonsSlider;