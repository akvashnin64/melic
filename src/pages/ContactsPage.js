import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Breadcrumbs from "../components/BreadCrumbs";
import Contacts from "../components/Contacts";

const ContactsPage = () => {
    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Контакты",
            url: "/contacts"
        }
    ];

    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} />
        <Contacts />
        <Footer />
        </>
    )
}

export default ContactsPage