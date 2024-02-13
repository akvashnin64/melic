import { Navigate, Routes } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const PrivateRoute = ({ element, ...rest }) => {
    const authToken = Cookies.get('authToken');
    console.log(authToken);

    const validateToken = async (token) => {
        try {
          console.log('Отправка запроса с токеном:', token);
      
          const response = await fetch('http://89.111.154.224/validate-token', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });
      
          console.log('Ответ сервера:', response);
      
          if (response.ok) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.error('Ошибка при отправке запроса на сервер: ', error);
          return false;
        }
      };

  const checkTokenValidity = async () => {
    if (authToken) {
      const isValid = await validateToken(authToken.split('=')[1]);
      return isValid;
    } else {
      return false;
    }
  };

  return checkTokenValidity() ? <Routes element={'/admin'} {...rest} /> : null;
};

export default PrivateRoute;