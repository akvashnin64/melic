import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Links from '../components/Links';
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'

const VacancyPage = () => {
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
            label: "Вакансии",
            url: "/vacancy"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <div className="plugText">
            <p>Этот раздел сейчас в разработке.</p>
            <p>Информация появится в ближайшее время.</p>
        </div>
        <Links />
        <Footer />
        </>
    )
}

export default VacancyPage