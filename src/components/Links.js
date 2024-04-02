import {React , useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';
import linksData from './LinksData';
import AliceCarousel from 'react-alice-carousel';

const UserLink = ({picture, text}) => (
        <div className='link'>
            <img src={picture} alt={text}></img>
            <p>{text}</p>
        </div>
);

const Links = () => {
  const [offset, setOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSliderEnabled, setIsSliderEnabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsSliderEnabled(windowWidth < 960);
  }, [windowWidth]);

  if (!isSliderEnabled) {
    return (
      <>
        <div className='containerLinks'>
          <div className='textLinks'>
            <p>ПОЛЕЗНЫЕ ССЫЛКИ</p>
          </div>
        </div>
        <div className='containerLink'>
          {linksData.map((link, index) => (
            <Link to={link.link} key={link.id}>
              <UserLink picture={link.picture} text={link.text} />
            </Link>
          ))}
        </div>
      </>
    );
  }

  const responsive = {
    0: { items: 3 },
    640: { items: 5 }
  };

  return (
    <>
      <div className='containerLinks'>
        <div className='textLinks'>
          <p>ПОЛЕЗНЫЕ ССЫЛКИ</p>
        </div>
        <img
            id='rightArrowLinks'
            src="/img/arrow-right.svg"
            alt="Right Arrow"
          />
      </div>
      <div className='containerLink'>
        <AliceCarousel
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          mouseDragEnabled
        >
          {linksData.map((link, index) => (
            <Link to={link.link} key={link.id}>
              <UserLink picture={link.picture} text={link.text} />
            </Link>
          ))}
        </AliceCarousel>
      </div>

    </>
  );
};

export default Links