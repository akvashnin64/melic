import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginRequest = async () => {
    try {
      const response = await fetch('http://89.111.154.224/autorization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });
  
      if (response.ok) {
        const admin = await response.json();
        document.cookie = `authToken=${admin.authToken}`;
        navigate(`/admin`);
      } else {
        alert('Неверный логин или пароль');
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса на сервер: ', error);
    }
  };

  const handleLogin = () => {
    loginRequest();
  };

  return (
    <div className="containerLogin">
      <div className="headerLogin">
        <p>Для доступа авторизуйтесь</p>
      </div>
      <div className="inputLogin">
        <input
          type="login"
          name="login"
          placeholder="Введите логин"
          value={login}
          onChange={handleLoginChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Введите пароль"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="login">
        <Link onClick={handleLogin}>Войти</Link>
      </div>
      <div className="backSite">
        <Link to="/">Вернуться на сайт</Link>
      </div>
    </div>
  );
};

export default LoginAdmin;