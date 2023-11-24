import React from 'react';
import Menu from './Menu'

const Line = () => (
  <hr className='headerLine'></hr>
)

class Header extends React.Component{
    render(){
        return(
          <>
          <div className='header'>
            <img src='./img/logo.png' className='mainLogo' alt='Main logo' />
          <div>
            <p className='textHeaderLevel1'>МИНИСТЕРСТВО СЕЛЬСКОГО ХОЗЯЙСТВА РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
            <p className='textHeaderLevel2'>Федеральное государственное бюджетное учреждение</p>
            <p className='textHeaderLevel2'>«Управление мелиорации земель и сельскохозяйственного водоснабжения по Саратовской области». «САРАТОВМЕЛИОВОДХОЗ»</p>
          </div>
         </div>
         <Line />
         <Menu />
          </>
        )
    }
  }

  export default Header