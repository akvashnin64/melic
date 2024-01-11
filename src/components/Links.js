import {React , useState} from 'react';
import { Link } from "react-router-dom";
import { useSwipeable } from 'react-swipeable';
import linksData from './LinksData';

const UserLink = ({picture, text}) => (
        <div className='link'>
            <img src={picture} alt={text}></img>
            <p>{text}</p>
        </div>
);

const Links = () => {
    const [offset, setOffset] = useState(0);

  const handlers = useSwipeable({
    onSwiped: (eventData) => handleSwipe(eventData.deltaX),
  });

  const handleSwipe = (deltaX) => {
    const containerWidth =  1000;
    const maxOffset = 0; // Начальная точка
    const minOffset = -((linksData.length - 1) * 80/* Ширина одного элемента */);

    let newOffset = offset + deltaX;

    // Предотвращаем выход за границы
    newOffset = Math.max(minOffset, Math.min(maxOffset, newOffset));

    setOffset(newOffset);
  };

    return(
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
        <div className='containerLink' style={{ transform: `translateX(${offset}px)` }} {...handlers}>
        {linksData.map((link, index) => (
          <Link to={link.link} key={link.id}>
            <UserLink picture={link.picture} text={link.text} />
          </Link>
        ))}
      </div>
    </>
    )
    
};

export default Links