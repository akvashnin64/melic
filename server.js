const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3001; // Подставь свой порт

app.use(cors());
app.use(bodyParser.json());

const imagesPath = path.join(__dirname, 'news_photo/news');

app.use('/alexandr/news_photo/news', (req, res, next) => {
  const url = req.url.toLowerCase();

  if (url.includes('/alexandr/news_photo/news/'))
    res.setHeader('Content-Type', 'image/jpeg');

  next();
});

app.use('/alexandr/news_photo/news', express.static(imagesPath));

const db = mysql.createConnection({
  host: '141.8.195.122', // Адрес сервера базы данных
  port: '3306', 
  user: 'alexandr', // Имя пользователя базы данных
  password: 'SQLpass1word/', // Пароль пользователя базы данных
  database: 'smvh_db' // Имя базы данных
});

db.connect(err => {
  if (err) {
    console.error('Ошибка подключения к базе данных: ', err);
  } else {
    console.log('Подключено к базе данных');
  }
});


app.get('/getNewsById/:id', (req, res) => {
  const id = req.params.id;

  const query = `
    SELECT
      table_news.oldIndex,
      table_news.titleNews,
      table_news.dateNews,
      table_news.textNews,
      GROUP_CONCAT(table_picture_news.filename) AS imageNames
    FROM table_news
    LEFT JOIN table_picture_news ON table_picture_news.content_id = table_news.oldIndex
    WHERE table_news.oldIndex = ?
    GROUP BY table_news.idNews;
  `;

  db.query(query, [id], (error, results) => {
    if (error) {
      console.error('Ошибка при выполнении запроса: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results[0]); // Отправляем результат в формате JSON
    }
  });
});


app.get('/getLastNews', (req, res) => {
  const query = `
    SELECT
      table_news.oldIndex,
      table_news.titleNews,
      table_news.dateNews,
      table_news.textNews,
      GROUP_CONCAT(table_picture_news.filename) AS imageNames
  FROM (
      SELECT * FROM table_news
      ORDER BY idNews DESC
      LIMIT 20
  ) table_news
  LEFT JOIN table_picture_news ON table_picture_news.content_id = table_news.oldIndex
  GROUP BY table_news.idNews
  ORDER BY table_news.idNews DESC;
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Ошибка при получении новостей: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json(result);
    }
  });
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