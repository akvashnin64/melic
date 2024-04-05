import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Uliyanovsk from "../components/Uliyanovsk";

const UliyanovskPage = () => {
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
            label: "Ульяновский филиал",
            url: "/uliyanovsk"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Uliyanovsk />
        <Links />
        <Footer />
        </>
    )
}

export default UliyanovskPage