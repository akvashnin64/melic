import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import PhotoSlider from "../components/PhotoSlider";
import Breadcrumbs from '../components/BreadCrumbs'
import VideoSlider from "../components/VideoSlider";

const GalleryPage = () => {
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

    return(
        <>
        <Header />
        <Menu />
        <Breadcrumbs paths={paths} /> 
        <PhotoSlider/>
        <VideoSlider/>
        <Footer />
        </>
    )
}

export default GalleryPage