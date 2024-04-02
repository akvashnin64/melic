import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Links from '../components/Links';
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'
import Vacancy from "../components/Vacancy";

const VacancyPage = () => {
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
            label: "Вакансии",
            url: "/vacancy"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <Vacancy/>
        <Links />
        <Footer />
        </>
    )
}

export default VacancyPage