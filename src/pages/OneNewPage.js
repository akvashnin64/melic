import React, { useState } from 'react';
import Header from "../components/Header";
import Menu from "../components/Menu";
import AnonsSlider from '../components/AnonsSlider'
import Links from '../components/Links';
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'
import AllNews from "../components/AllNews";
import { Link } from "react-router-dom";
import newSliderData from './NewSliderData';
import NewSlider from '../components/NewSlider';

const OneNew = (props) => {
    const { news_picture, news_date, news_title, news_text} = props;
    
    return(
        <>
            <div className='mainHeaderOneNew'>
                <p>НОВОСТИ</p>
            </div>
            <div className='dateOneNew'>
                <p>{news_date}</p>
            </div>
            <div className='titleOneNew'>
                <p>{news_title}</p>
            </div>
            <div className='textOneNew'>
                <p>{news_text}</p>
            </div>
            <div className='textOneNew'>
                <img src={news_picture}/>
            </div>
        </>
        
    )
}

const OneNewPage = (props) => {
    const { news_picture, news_date, news_title, news_text, news_id } = props;
    


    const paths = [
        {
            label: "Главная",
            url: "/"
        },
        {
            label: "Новости",
            url: "/news"
        },
        {
            label: news_date,
            url: "/news/news_for_date_" + news_date
        }
    ];
    
    return(
        <>
        <Header />
        <Menu />  
        <Breadcrumbs paths={paths} /> 
        <OneNew news_picture news_date news_title news_text/>
        <NewSlider/>
        <AnonsSlider/>
        <Links />
        <Footer />
        </>
    )
}

export default OneNewPage