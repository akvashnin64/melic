import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ isVisible, closeMenu  }) => {
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
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="mainLogoSmallMenu"/>
                <img src={process.env.PUBLIC_URL + '/img/close-icon.png'} className="closeIconSmallMenu" onClick={closeMenu}/>
            </div>
            <div className="textHeaderSmallMenu">
                <p className='textHeaderLevel1SmallMenu'>
                МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
                <p className='textHeaderLevel2SmallMenu'>
                Федеральное государственное бюджетное учреждение</p>
                <p className='textHeaderLevel2SmallMenu'>
                «Управление мелиорации земель и сельскохозяйственного водоснабжения по Саратовской области»</p>
            </div>
        </div>
        <div className='submenu'>
            <Link to={"/about"} className='menuLevel1' id="trigger-dropdown">
                ОБ УЧРЕЖДЕНИИ
                </Link>
            <div className="dropdownMenu">
                <Link to={"/about/directors"} className='menuLevel2'>
                    РУКОВОДИТЕЛИ
                    </Link>
                <Link to={"/about/history"} className='menuLevel2'>
                    ИСТОРИЯ МЕЛИОРАЦИИ
                    </Link>
                <Link to={"/about/persons"} className='menuLevel2'>
                    ЛЮДИ ДЕЛА
                    </Link>
                <Link to={"/about/acts"} className='menuLevel2'>
                    НОРМАТИВНО-ПРАВОВЫЕ АКТЫ
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
        <Link to={"/vacancy"} className='menuLevel1'>
            ВАКАНСИИ
            </Link>
    </div>
    </>
    )
}


export default Menu;