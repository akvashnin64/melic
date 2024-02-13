import { Navigate, Routes } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const authToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('authToken='));

  const navigate = useNavigate();

  const validateToken = async (token) => {
    try {
      const response = await fetch('http://89.111.154.224/validate-token', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `token=${token}`,
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
    if (authToken) {
      const isValid = await validateToken(authToken.split('=')[1]);
      return isValid;
    } else {
      return false;
    }
  };

  const redirectToLogin = () => navigate(`/admin/login`);

  return checkTokenValidity() ? <Routes element={element} {...rest} /> : redirectToLogin();
};

export default PrivateRoute;