import {React , useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer'
import PhotoSlider from "../components/PhotoSlider";
import Breadcrumbs from '../components/BreadCrumbs'
import VideoSlider from "../components/VideoSlider";
import Links from "../components/Links"

const GalleryPage = () => {
    const [photoData, setPhotoData] = useState([]);
    const [videoData, setVideoData] = useState([]);

    const location = useLocation();
  
    useEffect(() => {
      // Прокрутить в верхнюю часть страницы при изменении маршрута
      window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        fetch('http://89.111.154.224:3001/getPhotos')
        .then(response => response.json())
        .then(data => {
            setPhotoData(data.map(photo => ({
                index: photo.idPhoto,
                namePicture: photo.filename
            })));
        })
        .catch(error => console.error('Ошибка при запросе фото: ', error));
    }, []);

    useEffect(() => {
        fetch('http://89.111.154.224:3001/getVideos')
        .then(response => response.json())
        .then(data => {
            setVideoData(data.map(video => ({
                index: video.idVideo,
                nameVideo: video.filename,
                poster: video.poster
            })));
        })
        .catch(error => console.error('Ошибка при запросе фото: ', error));
    }, []);
  
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