import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const AnonsSlider = () => {
  const [anonsData, setAnonsData] = useState([]);
  const carouselRef = React.createRef();
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    fetch('http://89.111.154.224:3001/getLastAnonses')
      .then(response => response.json())
      .then(data => {
        setAnonsData(data.map(anons => ({
          ...anons,
        })));
      })
      .catch(error => console.error('Ошибка при запросе новостей: ', error));
  }, []);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    setIsTouchDevice(isTouch);
  }, []);

  const getImagePath = (namePic) => {
    return `http://89.111.154.224/graphContent/anonses/${namePic}`;
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handleSlideChanged = ({ item, isPrevSlideDisabled, isNextSlideDisabled }) => {
    setIsPrevDisabled(isPrevSlideDisabled);
    setIsNextDisabled(isNextSlideDisabled);
  };

  const responsive = {
    0: { items: 2 },
    641: { items: 1 }
  };

  const items = anonsData.map((anons, index) => (
    <div key={index} className='announcementsItem' data-value={index}>
      <img src={getImagePath(anons.imageNames)} alt={anons.titleAnons} />
      <p id='text3'>{anons.titleAnons}</p>
      <p id='text4'>{anons.dateAnons}</p>
    </div>
  ));

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
            onClick={handlePrevClick}
            style={{ opacity: isPrevDisabled ? 0.3 : 1, cursor: isPrevDisabled ? 'not-allowed' : 'pointer' }}
          />
          <img
            id='rightArrowNews'
            src="/img/arrow-right.svg"
            alt="Right Arrow"
            onClick={handleNextClick}
            style={{ opacity: isNextDisabled ? 0.3 : 1, cursor: isNextDisabled ? 'not-allowed' : 'pointer' }}
          />
        </div>
      </div>
      <AliceCarousel
        ref={carouselRef}
        mouseTracking={isTouchDevice}
        autoHeight
        disableDotsControls
        disableButtonsControls
        items={items}
        responsive={responsive}
        onSlideChanged={handleSlideChanged}
      />
    </div>
  );
};

export default AnonsSlider;
