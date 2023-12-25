import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Samara from "../components/Samara";

const SamaraPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Самарский филиал",
            url: "/samara"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Samara/>
        <Links />
        <Footer />
        </>
    )
}

export default SamaraPage