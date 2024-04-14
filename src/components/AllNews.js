import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const AllNews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const [newsData, setNewsData] = useState([]);

  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  };

  function cleanString(input) {
    const withoutHtmlTags = input.replace(/<[^>]*>/g, '');
    console.log(withoutHtmlTags);
    
    const replacedText = withoutHtmlTags.replace(/&laquo;/g, '«').replace(/&raquo;/g, '»').replace(/&nbsp;/g, '').replace(/&ndash;/g, '-').replace(/&mdash;/g, '-');
    console.log(replacedText);
    
    const decodedString = decodeURIComponent(replacedText);
    console.log(decodedString);
    
    return decodedString;
}

  useEffect(() => {
    // Асинхронный запрос на сервер при монтировании компонента
    fetch('http://89.111.154.224:3001/getLastNews')
      .then(response => response.json())
      .then(data => {
        setNewsData(data.map(news => ({
          ...news,
          formattedDate: formatTimestamp(news.dateNews),
        })));
      })
      .catch(error => console.error('Ошибка при запросе новостей: ', error));
  }, []); // Пустой массив зависимостей гарантирует, что useEffect сработает только при монтировании компонента

  useEffect(() => {
    // Передаем параметры startDate и endDate в URL-строку
    const url = `http://89.111.154.224:3001/getNewsForDate?startDate=${startDate/1000}&endDate=${endDate/1000}`;

    // Выполняем запрос только если есть выбранные даты
    if (startDate && endDate) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setNewsData(data.map((news) => ({
            ...news,
            formattedDate: formatTimestamp(news.dateNews),
          })));
        })
        .catch((error) => console.error('Ошибка при запросе новостей: ', error));
    }
  }, [startDate, endDate]);

  const totalPages = Math.ceil((newsData.length || 1) / itemsPerPage);

  function getImagePath(imageNames, oldIndex) {

    const namesArray = imageNames ? imageNames.split(',') : [];

    if (namesArray.length === 0) {
      var filepath = `http://89.111.154.224/graphContent/news/default/default.jpg`;
      return filepath; 
    }
    else {
      var filepath = `http://89.111.154.224/graphContent/news/${oldIndex}/${namesArray[0].trim()}`;
      return filepath;
    }
  }

  const handleStartDateChange = (e) => {
    setStartDate(new Date(e.target.value).getTime());
  };

  const handleEndDateChange = (e) => {
    setEndDate(new Date(e.target.value).getTime());
  };

  const loadMoreNews = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const displayedNews = newsData.slice(0, (currentPage + 1) * itemsPerPage);


  return (
    <>
      <div className="containerHeaderAndFilter">
        <div className="headerAllNews">
          <p>НОВОСТИ</p>
        </div>
        <div className="filterAllNews">
          <p>Дата от</p>
          <input id="startDate" type="date" placeholder="дд.мм.гггг" onChange={handleStartDateChange} />
          <p>до</p>
          <input id="endDate" type="date" placeholder="дд.мм.гггг" onChange={handleEndDateChange} />
        </div>
      </div>

      <div className="containerAllNews">
        {displayedNews.map((news, index) => (
          <div key={index} className="allNewsItem">
            {/* Assuming OnePointFromNews is a component that renders a single news item */}
            <OnePointFromNews
              news_picture={getImagePath(news.imageNames, news.oldIndex)}
              news_date={formatTimestamp(news.dateNews * 1000)}
              news_title={news.titleNews}
              news_text={cleanString(news.textNews)}
              news_id={news.oldIndex}
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

const OnePointFromNews = (props) => {
    
  const { news_picture, news_date, news_title, news_text, news_id } = props;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
  
    const truncatedText = text.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
  
    return lastSpaceIndex !== -1 ? truncatedText.slice(0, lastSpaceIndex) + '...' : truncatedText;
  };
  
  return(
      <div className="onePointFromNews">
          <div className="previewNews">
              <img src={news_picture} alt='Prewiew new'/>
          </div>
          <div className="infoAboutNews">
              <p className="dateAboutNews">{news_date}</p>
              <p className="titleAboutNews">{news_title}</p>
              <p className="textAboutNews">{truncateText(news_text, 200)}</p>
              <Link className='linkAboutNews' to={`/news/${news_id}`}>ПОДРОБНЕЕ</Link>
          </div>
      </div>
  )
}

export default AllNews