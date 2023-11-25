import React, { useState } from 'react';
import Menu from './Menu'

const Line = () => (
  <hr className='headerLine'></hr>
)

const Header = () => {

  const [isMenuVisible, setMenuVisible] = useState(false);

  const phoneMenu = () => {
      setMenuVisible(!isMenuVisible);
  };

      return(
        <>
        <div className='header'>
          <img src='./img/logo.png' className='mainLogo' alt='Main logo' />
        <div>
          <p className='textHeaderLevel1'>МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
          <p className='textHeaderLevel2'>Федеральное государственное бюджетное учреждение</p>
          <p className='textHeaderLevel2'>«Управление мелиорации земель и сельскохозяйственного водоснабжения по Саратовской области». «САРАТОВМЕЛИОВОДХОЗ»</p>
        </div>
          <img src='./img/menu.png' className='phoneMenu' alt='phoneMenu' onClick={phoneMenu}/>
        </div>
        <Line />
        <Menu />
        </>
      )
  
  }

  export default Header