import React, { useState } from 'react';
import newsData from './NewsData';
import { Link } from "react-router-dom";

const NewSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(newsData.length);
  
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
            <div><Link to='/news'>НОВОСТИ</Link></div>
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
        <div className="news">
            {newsData.slice(currentPage, currentPage + 3).map((news, index) => (
            <div key={index} className="news-item">
                <img     
                src={getImagePath(news.namePic)}
                />
                <p>{news.dateNews}</p>
                <p>{news.titleNews}</p>
            </div>
            ))}
        </div>
        </div>
    );
    };
  
  export default NewSlider;