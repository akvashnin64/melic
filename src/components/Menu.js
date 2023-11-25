import React from "react";
import { Link } from "react-router-dom";
import Banner1 from './Banner1'

const Menu = () => {

    return(
    <>
    <div className='menu'>
        <div className='submenu'>
            <Link to={"/about"} className='menuLevel1' id="trigger-dropdown">ОБ УЧРЕЖДЕНИИ</Link>
            <div className="dropdownMenu">
                <Link to={"/directors"} className='menuLevel2'>РУКОВОДИТЕЛИ</Link>
                <Link to={"/history"} className='menuLevel2'>ИСТОРИЯ МЕЛИОРАЦИИ</Link>
                <Link to={"/historydirectors"} className='menuLevel2'>ИСТОРИЯ РУКОВОДИТЕЛЕЙ</Link>
                <Link to={"/persons"} className='menuLevel2'>ЛЮДИ ДЕЛА</Link>
            </div>
        </div>
        <Link to={"/branches"} className='menuLevel1'>ФИЛИАЛЫ</Link>
        <Link to={"/news"} className='menuLevel1'>НОВОСТИ</Link>
        <Link to={"/galery"} className='menuLevel1'>ГАЛЕРЕЯ</Link>
        <Link to={"/guide"} className='menuLevel1'>СПРАВОЧНИК</Link>
        <Link to={"/contacts"} className='menuLevel1'>КОНТАКТЫ</Link>
    </div>
    <Banner1 />
    </>
    )
}


export default Menu;