import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';

const VideoSlider = ({ videoData ,  basePath }) => {
  const carouselRef = React.createRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

    const totalPages = Math.ceil(videoData.length);
    const handleTouchEvents = windowWidth <= 1279;

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

    const getVideoPath = (nameVideo) => {
      return `${basePath}/${nameVideo}`;
    };

  
    const responsive = {
      0: { items: 2 },
      340: { items: 2 },
      640: { items: 2 },
      960: { items: 3 },
      1280: {items: 3}
    };
  
    const items = videoData.map((video, index) => {
      return(
        <div key={index} className="video-items">
          <video className='oneVideoInSlider' 
            controls
            poster={`${basePath}/${video.poster}`}
            >
              <source src={getVideoPath(video.nameVideo)} 
              type="video/mp4" />
              Your browser does not support the video tag.
          </video>
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
            <div><p>ВИДЕО</p></div>
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
        <div className="videoSlider">
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
  
  export default VideoSlider;