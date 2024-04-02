import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import AnonsSlider from '../components/AnonsSlider'
import Links from '../components/Links';
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'
import AllNews from "../components/AllNews";

const NewsPage = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Прокрутить в верхнюю часть страницы при изменении маршрута
      window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'visible';
        };
      });
  
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Новости",
            url: "/news"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <AllNews/>
        <AnonsSlider/>
        <Links />
        <Footer />
        </>
    )
}

export default NewsPage