import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Breadcrumbs from "../components/BreadCrumbs";
import History from "../components/History";

const HistoryPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "История мелиорации",
            url: "/history"
        }
    ];

    return(
        <>
        <Header />
        <Menu /> 
        <Breadcrumbs paths={paths} /> 
        <History/>
        <Footer />
        </>
    )
}

export default HistoryPage