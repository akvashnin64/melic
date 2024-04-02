import {React , useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import PhotoSlider from "../components/PhotoSlider";
import photoData from "../components/PhotoSliderData";
import videoData from "../components/videoData";
import Breadcrumbs from '../components/BreadCrumbs'
import VideoSlider from "../components/VideoSlider";
import Links from "../components/Links"

const GalleryPage = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Прокрутить в верхнюю часть страницы при изменении маршрута
      window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'visible';
        };
      });
  
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

    const basePathImg = "http://89.111.154.224/graphContent/photoSlider";
    const basePathVideo = "http://89.111.154.224/graphContent/videoSlider";

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <PhotoSlider 
            photos={photoData.map(photo => photo.namePicture)} 
            basePath={basePathImg} 
            />

        <VideoSlider
            videoData={videoData}
            basePath={basePathVideo} 
        />
        <Links />
        <Footer />
        </>
    )
}

export default GalleryPage