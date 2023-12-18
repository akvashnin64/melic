import React from 'react';

function Contacts () {
    return(
        <>
        <div className='headerContacts'>
            <p>КОНТАКТЫ</p>
        </div>
        <div className='mobilePhoneContacts'>
            <img src='/img/phoneContacts.png'/>
            <p>8(8452) 22-74-00</p>
        </div>
        <div className='timeContacts'>
            <img src='/img/timeContacts.png'/>
            <p>ПН-ПТ с 9:00 до 21:00</p>
        </div>
        <div className='locationContacts'>
            <img src='/img/locationContacts.png'/>
            <p>410028 Саратов <br></br> ул. им. Н. Г. Чернышевского, д. 116А</p>
        </div>
        </>
    )}

export default Contacts