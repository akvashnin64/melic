import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Link } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';


const NewSlider = ({ headerText }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(calculateItemsPerPage());
  const [newsData, setNewsData] = useState([]);

  const totalPages = Math.ceil(newsData.length);

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

  function getImagePath(imageNames, oldIndex) {

    const namesArray = imageNames ? imageNames.split(',') : [];

    if (namesArray.length === 0) {
      var filepath = `http://89.111.154.224/graphContent/news/default/default.jpg`;
      return filepath; 
    }
    else {
      var filepath = `http://89.111.154.224/graphContent/news/${oldIndex}/${namesArray[0].trim()}`;
      return filepath;
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

   useEffect(() => {
    // Асинхронный запрос на сервер при монтировании компонента
    fetch('http://89.111.154.224:3001/getLastNews')
      .then(response => response.json())
      .then(data => {
        setNewsData(data.map(news => ({
          ...news,
          formattedDate: formatTimestamp(news.dateNews),
        })));
      })
      .catch(error => console.error('Ошибка при запросе новостей: ', error));
  }, []); // Пустой массив зависимостей гарантирует, что useEffect сработает только при монтировании компонента

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
            <div><Link to='/news' className='headerSliderLink'>{headerText}</Link></div>
            <div className='arrowNews'>
              <img
              id='leftArrowNews'
              src="/img/arrow-left.svg"
              alt="Left Arrow"
              style={{ opacity: window.innerWidth <= 1280 ? 0.3 : (currentPage > 0 ? 1 : 0.3) }}
              onClick={handlePrevClick}
              />
              <img
              id='rightArrowNews'
              src="/img/arrow-right.svg"
              alt="Right Arrow"
              style={{ opacity: window.innerWidth <= 1280 ? 0.3 : (currentPage < totalPages - 1 ? 1 : 0.3) }}
              onClick={handleNextClick}
              />
            </div>
        </div>
        <div className="news"  {...handlers}>
            {newsData.slice(currentPage, currentPage + itemsPerPage).map((news, index) => (
            <animated.div key={index} className="newsItem" style={fadeProps}>
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
            </animated.div>
            ))}
        </div>
        </div>
    );
    };
  
  export default NewSlider;