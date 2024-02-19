import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";

const PenzaPage = () => {
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
            label: "Пензенский филиал",
            url: "/penza"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Links />
        <Footer />
        </>
    )
}

export default PenzaPage