import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import PhotoSlider from "../components/PhotoSlider";
import photoData from "../components/PhotoSliderData";
import Breadcrumbs from '../components/BreadCrumbs'
import VideoSlider from "../components/VideoSlider";
import Links from "../components/Links"

const GalleryPage = () => {
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
            label: "Галерея",
            url: "/gallery"
        }
    ];

    const basePath = "http://89.111.154.224/graphContent/photoSlider";

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <PhotoSlider 
  photos={photoData.map(photo => photo.namePicture)} 
  basePath={basePath} 
/>
        <VideoSlider/>
        <Links />
        <Footer />
        </>
    )
}

export default GalleryPage