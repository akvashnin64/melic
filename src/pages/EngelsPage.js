import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Engels from "../components/Engels";

const EngelsPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Энгельсский филиал",
            url: "/engels"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} />
        <Engels/>
        <Links />
        <Footer />
        </>
    )
}

export default EngelsPage