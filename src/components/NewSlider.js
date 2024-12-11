import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

const NewSlider = ({ headerText }) => {
  const [newsData, setNewsData] = useState([]);
  const carouselRef = React.createRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const handleTouchEvents = windowWidth <= 1279;

  useEffect(() => {
    fetch('http://194.58.126.202:3001/api/getLastNews')
      .then(response => response.json())
      .then(data => {
        setNewsData(data.map(news => ({
          ...news,
          formattedDate: formatTimestamp(news.dateNews),
        })));
      })
      .catch(error => console.error('Ошибка при запросе новостей: ', error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    setIsTouchDevice(isTouch);
  }, []);

  function getImagePath(imageNames, oldIndex) {
    const namesArray = imageNames ? imageNames.split(',') : [];

    if (namesArray.length === 0) {
      return `http://194.58.126.202/graphContent/news/default/default.jpg`;
    } else {
      return `http://194.58.126.202/graphContent/news/${oldIndex}/${namesArray[0].trim()}`;
    }
  }

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }

    const truncatedText = text.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');

    return lastSpaceIndex !== -1 ? truncatedText.slice(0, lastSpaceIndex) + '...' : truncatedText;
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  };

  const responsive = {
    0: { items: 2 },
    340: { items: 2 },
    640: { items: 2 },
    960: { items: 2 },
    1280: { items: 3},
  };

  const items = newsData.map((news, index) => {
    return(
      <div key={index} className="newsItem">
        <Link to={`/news/${news.oldIndex}`}>
          <div className='containerPreviewImageForNewSlider'>
            <img
              src={getImagePath(news.imageNames, news.oldIndex)}
              alt='image news'
            />
          </div>
          <p>{formatTimestamp(news.dateNews * 1000)}</p>
          <div className='linkNewSlider' >
            {truncateText(news.titleNews, 50)}
          </div>
        </Link>
      </div>
    )
});

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
    setActiveSlideIndex(item);
  };

  return (
    <div className="containerSlider">
      <div className="textSlider">
        <div><Link to='/news' className='headerSliderLink'>{headerText}</Link></div>
        <div className='arrowNews'>
          <img
            id='leftArrowNews'
            src="/img/arrow-left.svg"
            alt="Left Arrow"
            onClick={handlePrevClick}
            style={{ opacity: isPrevDisabled || handleTouchEvents ? 0.3 : 1, cursor: isPrevDisabled ? 'not-allowed' : 'pointer' }}
          />
          <img
            id='rightArrowNews'
            src="/img/arrow-right.svg"
            alt="Right Arrow"
            onClick={handleNextClick}
            style={{ opacity: isNextDisabled || handleTouchEvents ? 0.3 : 1, cursor: isNextDisabled ? 'not-allowed' : 'pointer' }}
          />
        </div>
      </div>
      <div className="news">
        <AliceCarousel
          ref={carouselRef}
          responsive={responsive}
          autoWidth={false}
          disableDotsControls
          disableButtonsControls
          mouseDragEnabled={false}
          touchTrackingEnabled={handleTouchEvents}
          items={items}
          onResized={handleSlideChanged}
          onSlideChanged={handleSlideChanged}
        />
      </div>
    </div>
  );
};

export default NewSlider;