import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import TextBlockAbout from "../components/TextBlockAbout";
import CardsAbout from "../components/CardAbout";
import Breadcrumbs from "../components/BreadCrumbs";

const AboutPage = () => {
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
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <TextBlockAbout/>
        <CardsAbout/>
        <Links />
        <Footer />
        </>
    )
}

export default AboutPage