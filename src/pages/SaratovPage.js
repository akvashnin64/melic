import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Saratov from "../components/Saratov";

const SaratovPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Саратовский филиал",
            url: "/saratov"
        }
    ];

    return(
        <>
        <Header />
        <Breadcrumbs paths={paths} />
        <Saratov/>
        <Links />
        <Footer />
        </>
    )
}

export default SaratovPage