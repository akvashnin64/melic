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

    useEffect(() => {
      const handleWindowResize = () => {
        if (window.innerWidth < 640) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'visible';
        }
      };
  
      handleWindowResize(); // Устанавливаем overflow при первой загрузке страницы
  
      window.addEventListener('resize', handleWindowResize); // Добавляем слушатель события resize
  
      return () => {
        window.removeEventListener('resize', handleWindowResize); // Удаляем слушатель события resize
        document.body.style.overflow = 'visible'; // Устанавливаем overflow обратно в исходное состояние при размонтировании компонента
      };
    }, []);
  
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