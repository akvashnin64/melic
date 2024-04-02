import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import AnonsSlider from '../components/AnonsSlider'
import Links from '../components/Links';
import Footer from '../components/Footer'
import Guides from "../components/Guide";
import Breadcrumbs from '../components/BreadCrumbs'

const GuidePage = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Прокрутить в верхнюю часть страницы при изменении маршрута
      window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = 'visible';
        return () => {
          document.body.style.overflow = 'hidden';
        };
      });
  
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Справочник",
            url: "/guide"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <Guides />
        <Links/>
        <Footer />
        </>
    )
}

export default GuidePage