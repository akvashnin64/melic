import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import AnonsSlider from '../components/AnonsSlider'
import Links from '../components/Links';
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'

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
        <Menu />  
        <Breadcrumbs paths={paths} /> 
        <AnonsSlider/>
        <Links />
        <Footer />
        </>
    )
}

export default NewsPage