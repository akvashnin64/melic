import React, { useState } from 'react';
import cardAboutData from './CardAboutData'

const CardAbout = (props) => {
    return(
        <div className='cardAbout'>
            <p>{props.text}</p>
        </div>
    )
}

const CardsAbout = () => {

    const itemsPerPage = 6;
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);

    const cardComponent = cardAboutData
    .slice(0, visibleItems)
    .map(card => <CardAbout key={card.index} text={card.text}/>)

    

    const showMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
    };

    return (
        <>
        <div className='mainHeaderCardAbout'>
            <p>ОСНОВНЫЕ ВИДЫ ДЕЯТЕЛЬНОСТИ УЧРЕЖДЕНИЯ:</p>
        </div>
        
        <div className='containerCardAbout'>
            {cardComponent}
        </div>
        {visibleItems < cardAboutData.length && (
            <a onClick={showMore} className='showMore'>ПОСМОТРЕТЬ ЕЩЕ</a>
        )}
        </>
    );
    };
  
  export default CardsAbout;