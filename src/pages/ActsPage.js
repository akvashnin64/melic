import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Links from '../components/Links';
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'
import Acts from "../components/Acts";

const ActsPage = () => {
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
            label: "Нормативно-правовые акты",
            url: "/about/acts"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <Acts/>
        <Links />
        <Footer />
        </>
    )
}

export default ActsPage