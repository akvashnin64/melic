import React, { useState, useEffect, useLayoutEffect } from "react";

const Banner1 = () => {
  const [imageUrl, setImageUrl] = useState("/img/banner1.png");

  // Обновление изображения сразу после загрузки компонента
  useLayoutEffect(() => {
    handleResize();
  }, []);

  const handleResize = () => {
    const newImageUrl = window.innerWidth < 640 ? "/img/banner1low.png" : "/img/banner1.png";
    setImageUrl(newImageUrl);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='container-banner1'>
      <div className='banner'>
        <img src={imageUrl} alt="Banner"></img>
      </div>
      <div id='text1'><p>МЕЛИОРАЦИЯ –</p></div>
      <div id='text2'><p>дело всенародное!</p></div>
    </div>
  );
};

export default Banner1;