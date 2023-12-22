import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Links from '../components/Links'
import Breadcrumbs from "../components/BreadCrumbs";
import Persons from "../components/Person";

const PersonPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Люди дела",
            url: "/person"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} />
        <Persons />
        <Links />
        <Footer />
        </>
    )
}

export default PersonPage