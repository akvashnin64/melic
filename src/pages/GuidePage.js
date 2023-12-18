import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import AnonsSlider from '../components/AnonsSlider'
import Links from '../components/Links';
import Footer from '../components/Footer'
import Guides from "../components/Guide";
import Breadcrumbs from '../components/BreadCrumbs'

const GuidePage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Справочник",
            url: "/guide"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} /> 
        <Guides />
        <Footer />
        </>
    )
}

export default GuidePage