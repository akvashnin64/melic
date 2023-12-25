import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Partia from "../components/Partia";

const PartiaPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Гидрогеолого-мелиоративная партия",
            url: "/partia"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Partia/>
        <Links />
        <Footer />
        </>
    )
}

export default PartiaPage