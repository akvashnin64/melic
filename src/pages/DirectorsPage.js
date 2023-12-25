import React from "react";
import Header from "../components/Header";
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
        <Breadcrumbs paths={paths} />  
        <Directors/>
        <Footer />
        </>
    )
}

export default DirectorsPage