import React, { useState, useEffect } from 'react';
import newSliderData from './NewSliderData';
import { Link } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';

const NewSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(calculateItemsPerPage());

  const totalPages = Math.ceil(newSliderData.length);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(calculateItemsPerPage());
      setCurrentPage((prev) => Math.min(prev, totalPages - itemsPerPage));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [totalPages, itemsPerPage]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrevClick();
      } else if (event.key === 'ArrowRight') {
        handleNextClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });


  function calculateItemsPerPage() {
    return window.innerWidth <= 1279 ? 2 : 3;
  }

    const getImagePath = (namePic) => {
      return `/img/${namePic}.png`;
   };

    return (
        <div className="containerSlider">
        <div className="textSlider">
            <div><Link to='/news' className='headerSliderLink'>НОВОСТИ</Link></div>
            <div className='arrowNews'>
              <img
              id='leftArrowNews'
              src="/img/arrow-left.svg"
              alt="Left Arrow"
              style={{ opacity: currentPage > 0 ? 1 : 0.3 }}
              onClick={handlePrevClick}
              />
              <img
              id='rightArrowNews'
              src="/img/arrow-right.svg"
              alt="Right Arrow"
              style={{ opacity: currentPage < totalPages - 1 ? 1 : 0.3 }}
              onClick={handleNextClick}
              />
            </div>
        </div>
        <div className="news"  {...handlers}>
            {newSliderData.slice(currentPage, currentPage + itemsPerPage).map((news, index) => (
            <div key={index} className="newsItem">
                <img     
                src={getImagePath(news.namePic)}
                />
                <p>{news.dateNews}</p>
                <div className='linkNewSlider' >
                  <Link to={`/news/news_for_date_${news.dateNews}`}>
                    {news.titleNews}
                  </Link>
                </div>
                
            </div>
            ))}
        </div>
        </div>
    );
    };
  
  export default NewSlider;