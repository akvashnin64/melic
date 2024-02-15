import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Persons from "../components/Person";

const PersonPage = () => {
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
            label: "Люди дела",
            url: "/persons"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Persons />
        <Links />
        <Footer />
        </>
    )
}

export default PersonPage