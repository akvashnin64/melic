import { Navigate, Routes } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
    const cookies = document.cookie.split(';');
    let secondToken;
    
    for (const cookie of cookies) {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith('authToken=')) {
      } else if (trimmedCookie.startsWith('authToken=')) {
        secondToken = trimmedCookie.split('=')[1];
      }
    }

  const validateToken = async (token) => {
    try {
      const response = await fetch('http://89.111.154.224/validate-token', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

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
    if (secondToken) {
      const isValid = await validateToken(secondToken.split('=')[1]);
      return isValid;
    } else {
      return false;
    }
  };

  return checkTokenValidity() ? <Routes element={element} {...rest} /> : null;
};

export default PrivateRoute;