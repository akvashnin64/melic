import React, { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Contacts () {
    const [formData, setFormData] = useState({
        nameFeedback: '',
        emailFeedback: '',
        textFeedback: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3001/api/send-feedback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Обработка успешной отправки
            console.log('Форма успешно отправлена');
          } else {
            // Обработка ошибки отправки
            console.error('Ошибка при отправке формы');
          }
        } catch (error) {
          console.error('Ошибка при отправке формы', error);
        }
      };

    return(
        <div className='containerContactsPage'>
            <div className='infoContactsPage'>
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

                <div className="containerMapContactsPage">
                    <YMaps>
                        <Map 
                        className="mapContactsPage"
                        defaultState={{ center: [51.521924, 46.029397], zoom: 11 }}>
                            <Placemark geometry={[51.521924, 46.029397]} />
                        </Map>
                    </YMaps>
                </div>
            </div>

            <div className='feedback'>
                <div className='headerFeedback'>
                    <p>ОСТАВИТЬ ОБРАЩЕНИЕ</p>
                </div>
                <div className='textFeedback'>
                    <p>Оставьте свои контакты и мы свяжемся с вами <span className='boldTextAbout2'>в ближайшее время</span></p>
                </div>
                <form className='inputFieldsFeedback' action="send-email.php" method="post">
                    
                    <input 
                    id='nameFeedback' 
                    className='inputFieldFeedback'
                    type='text'
                    placeholder='Имя'
                    value={formData.nameFeedback}
                    onChange={handleChange}>
                    </input>
                    
                    <input 
                    id='emailFeedback' 
                    className='inputFieldFeedback'
                    type='email'
                    placeholder='Email'
                    value={formData.emailFeedback}
                    onChange={handleChange}>
                    </input>
                    
                    <input 
                    id='textFeedback' 
                    className='inputFieldFeedback'
                    type='text'
                    placeholder='Текст сообщения'
                    value={formData.textFeedback}
                    onChange={handleChange}>
                    </input>
                    
                    <div className='sendFeedback'>
                        <button type='submit'>Отправить обращение</button>
                    </div>
                </form>
            </div>
        
        </div>
    )}

export default Contacts