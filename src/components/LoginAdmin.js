import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

const LoginAdmin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate (); // Правильный импорт и использование useHistory

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

  const handleLogin = () => {
    const user = adminData.find(
      (admin) => admin.login === login && admin.password === password
    );

    if (user) {
      history.push(`/admin/${user.id}`);
    } else {
      alert("Неверные учетные данные");
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
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login">
        <Link onClick={handleLogin}>Войти</Link>
      </div>
      <div className="backSite">
        <Link to='/'>Вернуться на сайт</Link>
      </div>
    </div>
  );
};

export default LoginAdmin;