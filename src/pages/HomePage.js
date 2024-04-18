import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import NewSlider from '../components/NewSlider';
import AnonsSlider from '../components/AnonsSlider'
import Branches from '../components/Branches';
import Links from '../components/Links';
import Footer from '../components/Footer'
import Banner1 from '../components/Banner1'

const HomePage = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Прокрутить в верхнюю часть страницы при изменении маршрута
      window.scrollTo(0, 0);
    }, [location.pathname]);
  
    return(
        <>
            <Header />
            <Banner1 />
            <Branches />
            <NewSlider headerText={'НОВОСТИ'} />
            <AnonsSlider/>
            <Links />
            <Footer />
        </>
    )
}

export default HomePage