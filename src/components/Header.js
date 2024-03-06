import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from "../components/Menu";

const Line = () => (
  <hr className='headerLine'></hr>
)

const Header = () => {

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return(
    <>
    <div className='header'>
    <Link to='/' className='mainLogo'><img src={process.env.PUBLIC_URL + '/img/logo.png'} className='mainLogo' alt='Main logo' /></Link>      <div>
        <p className='textHeaderLevel1'>
          МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
        <p className='textHeaderLevel2'>
          Федеральное государственное бюджетное учреждение</p>
        <p className='textHeaderLevel2'>
          «Управление мелиорации земель и сельскохозяйственного водоснабжения по Саратовской области»</p>
      </div>
      <img src={process.env.PUBLIC_URL + '/img/menu.png'} 
        className='phoneMenu' 
        alt='phoneMenu'
        onClick={toggleMenu}/>
    </div>
    <Line />
    <Menu isVisible={isMenuVisible} closeMenu={closeMenu} />
    </>
  )

  }

  export default Header