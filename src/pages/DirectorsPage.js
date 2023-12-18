import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Directors from "../components/Directors";
import Breadcrumbs from '../components/BreadCrumbs'

const DirectorsPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Руководители",
            url: "/directors"
        }
    ];

    return(
        <>
        <Header />
        <Menu />
        <Breadcrumbs paths={paths} />  
        <Directors/>
        <Footer />
        </>
    )
}

export default DirectorsPage