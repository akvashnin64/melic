import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Ershov from "../components/Ershov";

const ErshovPage = () => {
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
            label: "Ершовский филиал",
            url: "/ershov"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Ershov/>
        <Links />
        <Footer />
        </>
    )
}

export default ErshovPage