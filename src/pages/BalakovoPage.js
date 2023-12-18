import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Balakovo from "../components/Balakovo";

const BalakovoPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Балаковский филиал",
            url: "/balakovo"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} />
        <Balakovo/>
        <Links />
        <Footer />
        </>
    )
}

export default BalakovoPage