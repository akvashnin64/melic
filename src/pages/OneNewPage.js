import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import AnonsSlider from '../components/AnonsSlider'
import Links from '../components/Links';
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'
import NewSlider from "../components/NewSlider";

const OneNew = ({ setNewsDataForPage }) => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/getNewsById/${parseInt(id, 10)}`)
        .then(response => response.json())
        .then(data => {
          setNewsData(data);
          setNewsDataForPage(data); // Передаем данные в родительский компонент
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
    }
  }, [id, setNewsDataForPage]);


  if (!newsData) {
    return <p>Загрузка...</p>;
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  };

  function cleanString(input) {
    const withoutHtmlTags = input.replace(/<[^>]*>/g, '');
    const replacedText = withoutHtmlTags.replace(/&laquo;/g, '«').replace(/&raquo;/g, '»').replace(/&nbsp;/, '').replace(/&ndash;/, '-').replace(/&mdash;/, '-');
    const decodedString = decodeURIComponent(replacedText);
    return decodedString;
  }

  function getImagePath(imageNames, oldIndex) {
    const namesArray = imageNames ? imageNames.split(',') : [];
    if (namesArray.length === 0) return null; 
    else {
      var filepath = `http://141.8.195.122/news/${oldIndex}/${namesArray[0].trim()}`;
      return filepath;
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
        <NewSlider/>
        <AnonsSlider/>
        <Links />
        <Footer />
        </>
  )
}

export default OneNewPage