import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Modal = ({ onClose, successMessage }) => (
  <div className='modal-overlay' onClick={onClose}>
    <div className='modal' onClick={(e) => e.stopPropagation()}>
      <img src='./img/close-icon.png' onClick={onClose} alt="Close Icon" />
      <p>{successMessage}</p>
    </div>
  </div>
);

function Contacts () {
  const form = useRef();
  const [validationErrorName, setValidationErrorName] = useState('');
  const [validationErrorEmail, setValidationErrorEmail] = useState('');
  const [validationErrorMessage, setValidationErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    const name = form.current['name'].value.trim();
    const email = form.current['email'].value.trim();
    const message = form.current['message'].value.trim();

    let isValid = true;

    if (name.length < 2 || !/^[а-яА-Яa-zA-Z ]+$/.test(name)) {
      setValidationErrorName('Имя должно содержать минимум 2 буквы и состоять только из букв');
      isValid = false;
    } else {
      setValidationErrorName('');
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setValidationErrorEmail('Неправильный формат email');
      isValid = false;
    } else {
      setValidationErrorEmail('');
    }

    if (message.length < 10 || !/^[а-яА-Яa-zA-Z0-9.,\-?!()\s]+$/.test(message)) {
      setValidationErrorMessage('Сообщение должно содержать минимум 10 символов и состоять только из букв, цифр и знаков препинания');
      isValid = false;
    } else {
      setValidationErrorMessage('');
    }

    return isValid;
  };

  const handleNameBlur = () => {
    const name = form.current['name'].value.trim();
    if (name.length < 2 || !/^[а-яА-Яa-zA-Z ]+$/.test(name)) {
      setValidationErrorName('Имя должно содержать минимум 2 буквы и состоять только из букв');
    } else {
      setValidationErrorName('');
    }
  };
  
  const handleEmailBlur = () => {
    const email = form.current['email'].value.trim();
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setValidationErrorEmail('Неправильный формат email');
    } else {
      setValidationErrorEmail('');
    }
  };
  
  const handleMessageBlur = () => {
    const message = form.current['message'].value.trim();
    if (message.length < 10 || !/^[а-яА-Яa-zA-Z0-9.,?!]+$/.test(message)) {
      setValidationErrorMessage('Сообщение должно содержать минимум 10 букв и состоять только из букв');
    } else {
      setValidationErrorMessage('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs.sendForm('service_fisgh5e', 'template_aicjr0n', form.current, 'SBC5ENSTTk7AMMeNE')
      .then((result) => {
        setSuccessMessage('Ваше обращение успешно отправлено, мы постараемся дать ответ как можно скорее!');
        setValidationErrorName('');
        setValidationErrorEmail('');
        setValidationErrorMessage('');
        form.current.reset();
        setIsModalOpen(true);
      })
      .catch((error) => {
        setSuccessMessage('');
        setIsModalOpen(true);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                <form className='inputFieldsFeedback' ref={form} onSubmit={sendEmail}>
                    
                    <input 
                    id='nameFeedback' 
                    name='name'
                    className={`inputFieldFeedback defaultBorder ${validationErrorName ? 'errorField' : ''}`}
                    type='text'
                    placeholder='Имя *'
                    onBlur={handleNameBlur}>
                    </input>
                    
                    <input 
                    id='emailFeedback' 
                    name='email'
                    className={`inputFieldFeedback defaultBorder ${validationErrorEmail ? 'errorField' : ''}`}
                    type='email'
                    placeholder='Email *'
                    onBlur={handleEmailBlur}>
                    </input>
                    
                    <textarea 
                    id='message' 
                    name='message'
                    className={`inputFieldFeedback defaultBorder ${validationErrorMessage ? 'errorField' : ''}`}
                    type='text'
                    placeholder='Текст сообщения *'
                    onBlur={handleMessageBlur}>
                    </textarea>

                    <div className='sendFeedback'>
                        <button type='submit'>Отправить обращение</button>
                    </div>
                </form>

                {/* Модальное окно */}
                {isModalOpen && (
                  <Modal onClose={() => setIsModalOpen(false)} successMessage={successMessage} />
                )}
              </div>
          </div>
        
    )}

export default Contacts