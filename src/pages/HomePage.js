import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import NewSlider from '../components/NewSlider';
import AnonsSlider from '../components/AnonsSlider'
import Branches from '../components/Branches';
import Links from '../components/Links';
import Footer from '../components/Footer'
import Banner1 from '../components/Banner1'

const HomePage = () => {
    return(
        <>
            <Header />
            <Menu/>
            <Banner1 />
            <Branches />
            <NewSlider />  
            <AnonsSlider/>
            <Links />
            <Footer />
        </>
    )
}

export default HomePage