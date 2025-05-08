import React, { useState, useRef , useEffect } from 'react';
import { Link } from "react-router-dom";

function Contact (props) {
  return (
    <div className='footerContacts'>
        <div><p>{props.email}</p></div>
        <div><p>{props.phone}</p></div>
    </div>
  )
}

const Footer = () => {
    const [brancheData, setBrancheData] = useState([]);
    const [selectBrancheData, setSelectBrancheData] = useState();

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getBranches')
            .then(response => response.json())
            .then(data => {
                const fullBranches = data.map(branch => ({ ...branch }));
                setBrancheData(fullBranches);
                const selectBranche = fullBranches.find(branch => branch.nameBranch === "Саратовмелиоводхоз");
                setSelectBrancheData(selectBranche);
            })
            .catch(error => console.error('Ошибка при запросе филиалов: ', error));
    }, []);

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
        <div className="containerFooter">
            <div className='footer'>
                <div className='footerPicture'>
                    <div><img src='/img/footer.png'></img></div>
                </div>
                <div className='footerMenu'>
                    <div><Link to={"/about"}>ОБ УЧРЕЖДЕНИИ</Link></div>
                    <div><Link to={"/directors"}>РУКОВОДИТЕЛИ</Link></div>
                    <div><Link to={"/"} onClick={scrollToHeight}>ФИЛИАЛЫ</Link></div>
                </div>
                <div className='footerMenu'>
                    <div><Link to={"/gallery"}>ГАЛЕРЕЯ</Link></div>
                    <div><Link to={"/guide"}>СПРАВОЧНИК</Link></div>
                    <div><Link to={"/contacts"}>КОНТАКТЫ</Link></div>
                </div>
                {selectBrancheData && (
                    <Contact
                        key={selectBrancheData.idBranch}
                        email={selectBrancheData.emailBranch}
                        phone={selectBrancheData.phoneBranch}
                    />
                )}
            </div>
        </div>
        
      )


    
};

export default Footer;