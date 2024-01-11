import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import Directors from "../components/Directors";
import Breadcrumbs from '../components/BreadCrumbs'

const DirectorsPage = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Прокрутить в верхнюю часть страницы при изменении маршрута
      window.scrollTo(0, 0);
    }, [location.pathname]);
  
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Руководители",
            url: "/directors"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />  
        <Directors/>
        <Footer />
        </>
    )
}

export default DirectorsPage