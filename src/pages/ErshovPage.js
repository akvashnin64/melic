import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Ershov from "../components/Ershov";

const ErshovPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Ершовский филиал",
            url: "/ershov"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Ershov/>
        <Links />
        <Footer />
        </>
    )
}

export default ErshovPage