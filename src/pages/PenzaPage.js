import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Penza from "../components/Penza";

const PenzaPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Пензенский филиал",
            url: "/penza"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} />
        <Penza />
        <Links />
        <Footer />
        </>
    )
}

export default PenzaPage