import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import AnonsSlider from '../components/AnonsSlider'
import Links from '../components/Links';
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'
import NewSlider from "../components/NewSlider";
import PhotoSlider from '../components/PhotoSlider';

const OneNew = ({ setNewsDataForPage }) => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const location = useLocation();

  useEffect(() => {
    // Прокрутить в верхнюю часть страницы при изменении маршрута
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (id) {
      fetch(`http://89.111.154.224:3001/getNewsById/${parseInt(id, 10)}`)
        .then(response => response.json())
        .then(data => {
          setNewsData(data);
          setNewsDataForPage(data); // Передаем данные в родительский компонент
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
    }
  }, [id, setNewsDataForPage]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  });


  if (!newsData) {
    return <p>Загрузка...</p>;
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  };

  function cleanString(input) {
    const withoutHtmlTags = input.replace(/<[^>]*>(\s*<\/[^>]*>)?/g, '');
    const removeRemainingTags = withoutHtmlTags.replace(/<[^>]*>/g, '');
    const replacedText = removeRemainingTags.replace(/&laquo;/g, '«').replace(/&raquo;/g, '»').replace(/&nbsp;/g, '').replace(/&ndash;/g, '-').replace(/&mdash;/g, '-');
    const decodedString = decodeURIComponent(replacedText);
    return decodedString;
}

  function getImagePath(imageNames, oldIndex) {
    const namesArray = imageNames ? imageNames.split(',') : [];
    if (namesArray.length === 0) return null; 
    else {
      return `http://89.111.154.224/news/${oldIndex}/${namesArray[currentPage].trim()}`;
    }
  }

  function usageSlider(imageCount) {
    if (imageCount < 3) {
      return false;
    } else {
      return true; // Используем слайдер
    }
  }



  return(
    <div className='containerOneNew'>
      <div className='containerHeaderOneNew'>
        <p>НОВОСТИ</p>
      </div>
      <div className='containerDateOneNew'>
        <p>{formatTimestamp(newsData.dateNews * 1000)}</p>
      </div>
      <div className='containerTitleOneNew'>
        <p>{newsData.titleNews}</p>
      </div>
      <div className='containerTextOneNew'>
        <p>{cleanString(newsData.textNews)}</p>
      </div>
      <div className='containerImagesOneNew'>
      {usageSlider(newsData.imageCount) ? (
        <PhotoSlider 
          photos={newsData.imageNames ? newsData.imageNames.split(',') : []} 
          basePath={`http://89.111.154.224/graphContent/news/${newsData.oldIndex}`}
        />
      ) : (
        (newsData.imageNames && newsData.imageNames.trim() !== '') ? (
          newsData.imageNames.split(',').map((imageName, index) => (
            <img
              className='photoInOneNewPage'
              key={index}
              src={`http://89.111.154.224/graphContent/news/${newsData.oldIndex}/${imageName.trim()}`}
              alt={`Image ${index + 1}`}
              style={{
                width: newsData.imageCount === 1 ? '75%' : newsData.imageCount === 2 ? '50%' : newsData.imageCount === 3 ? '30%' : 'auto',
                height: newsData.imageCount === 1 ? '75%' : newsData.imageCount === 2 ? '50%' : newsData.imageCount === 3 ? '30%' : 'auto'
              }}
            />
          ))
        ) : null
      )}
      </div>

    </div>
  )
}


const OneNewPage = () =>{
  const [newsDataForPage, setNewsDataForPage] = useState(null);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  };

  const paths = newsDataForPage
    ? [
        {
          label: "Главная",
          url: "/"
        },
        {
          label: "Новости",
          url: "/news"
        },
        {
          label: formatTimestamp(newsDataForPage.dateNews * 1000)
        }
      ]
    : [];

  return(
    <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <OneNew setNewsDataForPage={setNewsDataForPage}
        />
        <NewSlider headerText={'ДРУГИЕ'} />
        <AnonsSlider/>
        <Links />
        <Footer />
        </>
  )
}

export default OneNewPage