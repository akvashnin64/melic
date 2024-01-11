import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Balakovo from "../components/Balakovo";

const BalakovoPage = () => {
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
            label: "Балаковский филиал",
            url: "/balakovo"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Balakovo/>
        <Links />
        <Footer />
        </>
    )
}

export default BalakovoPage