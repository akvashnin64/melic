import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import Breadcrumbs from "../components/BreadCrumbs";
import History from "../components/History";
import Links from "../components/Links";

const HistoryPage = () => {
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
            label: "Об учреждении",
            url: "/about"
        },
        {
            label: "История мелиорации",
            url: "/about/history"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <History/>
        <Links/>
        <Footer />
        </>
    )
}

export default HistoryPage