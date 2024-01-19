const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001; // Подставь свой порт

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'h908197751.mysql', // Адрес сервера базы данных
  user: 'h908197751_new1', // Имя пользователя базы данных
  password: 'WH85str7', // Пароль пользователя базы данных
  database: 'h908197751_newdb' // Имя базы данных
});

db.connect(err => {
  if (err) {
    console.error('Ошибка подключения к базе данных: ', err);
  } else {
    console.log('Подключено к базе данных');
  }
});

// Обработка изменения данных в БД через админку
app.post('/updateData', (req, res) => {
  const { id, newData } = req.body;
  const query = `UPDATE your_table SET your_column = ? WHERE id = ?`;

  db.query(query, [newData, id], (err, result) => {
    if (err) {
      console.error('Ошибка при обновлении данных: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).send('Данные успешно обновлены');
    }
  });
});

// Обработка отправки обратной связи с сайта
app.post('/feedback', (req, res) => {
  const { name, email, message } = req.body;
  const query = `INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)`;

  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Ошибка при сохранении обратной связи: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).send('Обратная связь успешно отправлена');
    }
  });
});

app.post('/autorization', (req, res) => {
  const { login, password } = req.body;
  const query = `SELECT * FROM table_users WHERE login = ? AND password = ?`;

  db.query(query, [login, password], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(401).send('Неверный логин или пароль');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});