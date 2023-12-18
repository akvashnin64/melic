import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Mordva from "../components/Mordva";

const MordvaPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Филиал по Республике Мордовия",
            url: "/mordva"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} />
        <Mordva/>
        <Links />
        <Footer />
        </>
    )
}

export default MordvaPage