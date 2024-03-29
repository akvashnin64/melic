import { Link } from "react-router-dom";

const Footer = () => {
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
                <div className='footerContacts'>
                    <div><p>SARWODHOZ@MAIL.RU</p></div>
                    <div><p>8(8452) 22-74-00</p></div>
                    <div><p>8(8452) 22-74-01</p></div>
                </div>
        </div>
        </div>
        
      )


    
};

export default Footer;