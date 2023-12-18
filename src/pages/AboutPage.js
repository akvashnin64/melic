import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import TextBlockAbout from "../components/TextBlockAbout";
import CardsAbout from "../components/CardAbout";
import Breadcrumbs from "../components/BreadCrumbs";

const AboutPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Об учреждении",
            url: "/about"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} />
        <TextBlockAbout/>
        <CardsAbout/>
        <Links />
        <Footer />
        </>
    )
}

export default AboutPage