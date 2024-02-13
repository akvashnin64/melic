import React, { useState } from 'react';

const VideoSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(videoData.length);
  
    const handlePrevClick = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    };
  
    const handleNextClick = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const getVideoPath = (nameVideo) => {
      return `/img/videoSlider/${nameVideo}.mp4`;
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
            style={{ opacity: currentPage > 0 ? 1 : 0.3 }}
            onClick={handlePrevClick}
            />
            <img
            className='rightArrowGallery'
            src="/img/arrow-right.svg"
            alt="Right Arrow"
            style={{ opacity: currentPage < totalPages - 1 ? 1 : 0.3 }}
            onClick={handleNextClick}
            />
            </div>
        </div>
        <div className="videoSlider">
            {videoData.slice(currentPage, currentPage + 3).map((video, index) => (
            <div key={index} className="video-items">
                <video className='oneVideoInSlider' 
                controls
                poster={`/graphContent/videoSlider/${video.nameVideo}.png`}
                >
                    <source src={getVideoPath(video.nameVideo)} 
                    type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            ))}
        </div>
        </div>
    );
    };
  
  export default VideoSlider;