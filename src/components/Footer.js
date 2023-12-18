import { Link } from "react-router-dom";

const Footer = () => (
    <div className='footer'>
            <div className='footerPicture'>
                <div><img src='/img/footer.png'></img></div>
            </div>
            <div className='footerMenu'>
                <div><Link to={"/about"}>ОБ УЧРЕЖДЕНИИ</Link></div>
                <div><Link to={"/directors"}>РУКОВОДИТЕЛИ</Link></div>
                <div><Link to={"/branches"}>ФИЛИАЛЫ</Link></div>
            </div>
            <div className='footerMenu'>
                <div><Link to={"/gallery"}>ГАЛЕРЕЯ</Link></div>
                <div><Link to={"/service"}>УСЛУГИ</Link></div>
                <div><Link to={"/contacts"}>КОНТАКТЫ</Link></div>
            </div>
            <div className='footerContacts'>
                <div><p>INFO@SARATOVMELIO.MCX.GOV.RU</p></div>
                <div><p>8(8452) 22-74-00</p></div>
                <div><p>8(8452) 22-74-01</p></div>
            </div>
    </div>
);

export default Footer;