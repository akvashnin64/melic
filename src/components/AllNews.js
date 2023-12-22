import React, { useState } from 'react';
import { Link } from "react-router-dom";
import newSliderData from './NewSliderData';
/* const [ dateMin, setDateMin ] = useState(null);
const [ dateMax, setDateMax ] = useState(null); */

/* const filteredArticles = useMemo(
  () => [
    [ dateMin, n => n.publishedAt >= dateMin ],
    [ dateMax, n => n.publishedAt <= dateMax ],
  ].reduce((acc, n) => n[0] ? acc.filter(n[1]) : acc, articles),
  [ articles, dateMin, dateMax ]
); */

const OnePointFromNews = (props) => {
    
    const { news_picture, news_date, news_title, news_text, news_id } = props;
    
    return(
        <div className="onePointFromNews">
            <div className="previewNews">
                <img src={news_picture}/>
            </div>
            <div className="infoAboutNews">
                <p className="dateAboutNews">{news_date}</p>
                <p className="titleAboutNews">{news_title}</p>
                <p className="textAboutNews">{news_text}</p>
                <Link className='linkAboutNews' to={`/news/news_for_date_${news_date}`}>ПОДРОБНЕЕ</Link>
            </div>
        </div>
    )
}

const AllNews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(newSliderData.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const getImagePath = (namePic) => {
    return `/img/${namePic}.png`;
  };

  const loadMoreNews = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const displayedNews = newSliderData.slice(0, (currentPage + 1) * itemsPerPage);


  return (
    <>
      <div className="containerHeaderAndFilter">
        <div className="headerAllNews">
          <p>НОВОСТИ</p>
        </div>
        <div className="filterAllNews">
          <p>Дата</p>
          <input type="date" placeholder="с" />
          <input type="date" placeholder="по" />
        </div>
      </div>

      <div className="containerAllNews">
        {displayedNews.map((news, index) => (
          <div key={index} className="allNewsItem">
            {/* Assuming OnePointFromNews is a component that renders a single news item */}
            <OnePointFromNews
              news_picture={getImagePath(news.namePic)}
              news_date={news.dateNews}
              news_title={news.titleNews}
              news_text={news.textNews}
              news_id={news.id}
            />
          </div>
        ))}
        {currentPage < totalPages - 1 && (
          <button className="buttonUploadNews" onClick={loadMoreNews}>
            Загрузить ещё
          </button>
        )}
      </div>
    </>
  );
};

export default AllNews