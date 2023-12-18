import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Kalininsk from "../components/Kalininsk";

const KalininskPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Калининский филиал",
            url: "/kalininsk"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} />
        <Kalininsk />
        <Links />
        <Footer />
        </>
    )
}

export default KalininskPage