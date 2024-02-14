import React, { useState } from 'react';

const PhotoSlider = ({ photos, basePath }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = Math.ceil(photos.length);

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const getImagePath = (namePicture) => {
    return `${basePath}/${namePicture}`;
  };

  const openPopup = (index) => {
    setSelectedImage(currentPage + index); // Используем текущую страницу и индекс внутри слайда
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="containerSlider">
      <div className="textSlider">
        <div>
          <p>ФОТО</p>
        </div>
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
      <div className="photo">
        {photos.slice(currentPage, currentPage + 3).map((photo, index) => (
          <div key={index} className="news-item">
            <img
              src={getImagePath(photo)}
              alt={`Photo ${index + 1}`}
              onClick={() => openPopup(index)}
            />
          </div>
        ))}
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