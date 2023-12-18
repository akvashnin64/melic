import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import PhotoSlider from "../components/PhotoSlider";
import Breadcrumbs from '../components/BreadCrumbs'

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
        <Footer />
        </>
    )
}

export default GalleryPage