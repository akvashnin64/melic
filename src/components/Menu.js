import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ isVisible }) => {
    const menuStyle = isVisible ? 'menuVisible' : 'menuHidden';

    const scrollToHeight = () => {
        const targetElement = document.getElementById("forScroll");
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      };

    return(
    <>
    <div className={`menu ${menuStyle}`}>
        <div className="headerSmallMenu">
            <div className="imagesSmallMenu">
                <img src='./img/logo.png' className="mainLogoSmallMenu"/>
                <img src='./img/close-icon.png' className="closeIconSmallMenu"/>
            </div>
            <div className="textHeaderSmallMenu">
                <p className='textHeaderLevel1SmallMenu'>
                МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
                <p className='textHeaderLevel2SmallMenu'>
                Федеральное государственное бюджетное учреждение</p>
                <p className='textHeaderLevel2SmallMenu'>
                «Управление мелиорации земель и сельскохозяйственного водоснабжения по Саратовской области». «САРАТОВМЕЛИОВОДХОЗ»</p>
            </div>
        </div>
        <div className='submenu'>
            <Link to={"/about"} className='menuLevel1' id="trigger-dropdown">
                ОБ УЧРЕЖДЕНИИ
                </Link>
            <div className="dropdownMenu">
                <Link to={"/directors"} className='menuLevel2'>
                    РУКОВОДИТЕЛИ
                    </Link>
                <Link to={"/history"} className='menuLevel2'>
                    ИСТОРИЯ МЕЛИОРАЦИИ
                    </Link>
                <Link to={"/persons"} className='menuLevel2'>
                    ЛЮДИ ДЕЛА
                    </Link>
            </div>
        </div>
        <Link to={"/"} className='menuLevel1'  id="secondItemMenu" onClick={scrollToHeight}>
            ФИЛИАЛЫ
            </Link>
        <Link to={"/news"} className='menuLevel1'>
            НОВОСТИ
            </Link>
        <Link to={"/gallery"} className='menuLevel1'>
            ГАЛЕРЕЯ
            </Link>
        <Link to={"/guide"} className='menuLevel1'>
            СПРАВОЧНИК
            </Link>
        <Link to={"/contacts"} className='menuLevel1'>
            КОНТАКТЫ
            </Link>
    </div>
    </>
    )
}


export default Menu;