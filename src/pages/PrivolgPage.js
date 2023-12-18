import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Privolg from "../components/Privolg";

const PrivolgPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Приволжский филиал",
            url: "/privolg"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} />
        <Privolg />
        <Links />
        <Footer />
        </>
    )
}

export default PrivolgPage