import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import Directors from "../components/Directors";
import Breadcrumbs from '../components/BreadCrumbs'
import Links from "../components/Links";

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
            label: "Об учреждении",
            url: "/about"
        },
        {
            label: "Руководители",
            url: "/about/directors"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />  
        <Directors/>
        <Links />
        <Footer />
        </>
    )
}

export default DirectorsPage