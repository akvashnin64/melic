import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const adminData = [
    {
      id: 1,
      login: "admin1",
      password: "admin1",
    },
    {
      id: 2,
      login: "admin2",
      password: "admin2",
    },
  ];

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const admin = adminData.find((admin) => admin.login === login && admin.password === password);

    if (admin) {
      // Успешная авторизация
      // Можешь использовать localStorage или sessionStorage для хранения информации об авторизации
      // Например, localStorage.setItem('isLoggedIn', true);
      navigate(`/admin/${admin.id}`); // Перенаправление на страницу админки
    } else {
      // Неуспешная авторизация
      alert("Неверный логин или пароль");
    }
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