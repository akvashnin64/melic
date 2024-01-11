import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import Breadcrumbs from "../components/BreadCrumbs";
import Contacts from "../components/Contacts";

const ContactsPage = () => {
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
            label: "Контакты",
            url: "/contacts"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Contacts />
        <Footer />
        </>
    )
}

export default ContactsPage