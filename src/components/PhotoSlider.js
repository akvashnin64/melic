import React, { useState } from 'react';

const photoData = [
    {
        index: '1',
        namePicture: 'photo1'
    },
    {
        index: '2',
        namePicture: 'photo2'
    },
    {
        index: '3',
        namePicture: 'photo3'
    },
    {
        index: '4',
        namePicture: 'photo4'
    },
    {
        index: '5',
        namePicture: 'photo5'
    },
    {
        index: '6',
        namePicture: 'photo6'
    }
]

const PhotoSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(photoData.length);
  
    const handlePrevClick = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    };
  
    const handleNextClick = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const getImagePath = (namePicture) => {
      return `/img/${namePicture}.jpg`;
    };

    return (
        <div className="containerSlider">
        <div className="textSlider">
            <div><p>ФОТО</p></div>
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
        <div className="photo">
            {photoData.slice(currentPage, currentPage + 3).map((photo, index) => (
            <div key={index} className="news-item">
                <img src={getImagePath(photo.namePicture)}/>
            </div>
            ))}
        </div>
        </div>
    );
    };
  
  export default PhotoSlider;