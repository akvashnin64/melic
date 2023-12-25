import React from "react";
import Header from "../components/Header";
import AnonsSlider from '../components/AnonsSlider'
import Links from '../components/Links';
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'
import AllNews from "../components/AllNews";

const NewsPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Новости",
            url: "/news"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} /> 
        <AllNews/>
        <AnonsSlider/>
        <Links />
        <Footer />
        </>
    )
}

export default NewsPage