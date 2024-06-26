import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Partia from "../components/Partia";

const PartiaPage = () => {
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
            label: "Гидрогеолого-мелиоративная партия",
            url: "/partia"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Partia/>
        <Links />
        <Footer />
        </>
    )
}

export default PartiaPage