import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Uliyanovsk from "../components/Uliyanovsk";

const UliyanovskPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Ульяновский филиал",
            url: "/uliyanovsk"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Uliyanovsk />
        <Links />
        <Footer />
        </>
    )
}

export default UliyanovskPage