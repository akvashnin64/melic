import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';

const PhotoSlider = ({ photos, basePath, visibleHeader, onImageSelect, inAdmin }) => {
  const carouselRef = React.createRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const totalPages = Math.ceil(photos.length);
  const handleTouchEvents = windowWidth <= 1279;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {

  }, []);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    setIsTouchDevice(isTouch);
  }, []);

  const getImagePath = (namePicture) => {
    return `${basePath}/${namePicture}`;
  };

  const responsive = {
    0: { items: 2 },
    340: { items: 2 },
    640: { items: 2 },
    960: { items: 3 },
    1280: {items: 3}
  };

  const items = photos.map((photo, index) => {
    return(
      <div key={index} className={`news-item ${index === selectedImage ? 'selected' : ''}`}>
        <img
          src={getImagePath(photo)}
          alt={`Photo ${index + 1}`}
          onClick={() => handleClick(index)}
        />
      </div>
    )
  });

  const handleClick = (index) => {
    if (inAdmin) {
      onSelectPhoto(index); // Если в режиме администратора, вызываем функцию selectPhoto
    } else {
      openPopup(index); // Если не в режиме администратора, вызываем функцию openPopup
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const checkLastSlideVisibility = () => {
    const slider = carouselRef.current?.rootComponent?.stageComponent;
    if (!slider) return;
  
    const { scrollWidth, clientWidth, scrollLeft } = slider;
  
    // Если не в конце списка, разрешить дополнительную прокрутку
    if (scrollLeft + clientWidth < scrollWidth) {
      carouselRef.current.slideNext();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      checkLastSlideVisibility();
    }
  };

  const handleSlideChanged = ({ item, isPrevSlideDisabled, isNextSlideDisabled }) => {
    setIsPrevDisabled(isPrevSlideDisabled);
    setIsNextDisabled(isNextSlideDisabled);
    setActiveSlideIndex(item);
  };

  const openPopup = (index) => {
    setSelectedImage(index);
    onImageSelect(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const onSelectPhoto = (index) => {
    setSelectedImage(index);
    onImageSelect(index);
  }

  return (
    <div className="containerSlider">
      <div className="textSlider" style={{ display: !visibleHeader ? 'none' : '' }}>
        <div>
          <p>ФОТО</p>
        </div>
        <div className='arrowNews'>
          <img
            className='leftArrowGallery'
            src="/img/arrow-left.svg"
            alt="Left Arrow"
            style={{ opacity: isPrevDisabled || handleTouchEvents ? 0.3 : 1, cursor: isPrevDisabled ? 'not-allowed' : 'pointer' }}
            onClick={handlePrevClick}
          />
          <img
            className='rightArrowGallery'
            src="/img/arrow-right.svg"
            alt="Right Arrow"
            style={{ opacity: isNextDisabled || handleTouchEvents ? 0.3 : 1, cursor: isNextDisabled ? 'not-allowed' : 'pointer' }}
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="photo">
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

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup">
            <img
              src={getImagePath(photos[selectedImage])}
              alt={`Photo ${selectedImage + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoSlider;