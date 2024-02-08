import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import anonsData from './AnonsData';
import { Link } from "react-router-dom";

const AnonsSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(calculateItemsPerPage());

  const totalPages = Math.ceil(anonsData.length);

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

  function calculateItemsPerPage() {
    return window.innerWidth <= 640 ? 2 : 1;
  }

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - itemsPerPage));
  };

  const getImagePath = (namePic) => {
    return `/img/${namePic}.png`;
  };

  const fadeProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    config: config.molasses, // Вы можете изменить параметры конфигурации для регулировки скорости анимации
    onRest: () => {
      fadeProps.start({ reset: true });
    },
  });

  return (
    <div className="containerSlider">
      <div className="textSlider">
        <div>
          <Link className='headerSliderLink'>АНОНСЫ</Link>
        </div>
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
            style={{ opacity: currentPage < totalPages - itemsPerPage ? 1 : 0.3 }}
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="banner2">
        {anonsData.slice(currentPage, currentPage + itemsPerPage).map((anons, index) => (
          <animated.div key={index} className="announcementsItem" style={fadeProps}>
            <img src={getImagePath(anons.namePic)} />
            <p id='text3'>{anons.titleAnons}</p>
            <p id='text4'>{anons.dateAnons}</p>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default AnonsSlider;