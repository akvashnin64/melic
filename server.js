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

app.get('/getNewsForDate', (req, res) => {
  const startDate = req.query.startDate; // Используйте req.query для получения параметров из строки запроса
  const endDate = req.query.endDate;

  // Измененный SQL-запрос с использованием условия WHERE для фильтрации по дате
  const query = `
    SELECT
      table_news.oldIndex,
      table_news.titleNews,
      table_news.dateNews,
      table_news.textNews,
      GROUP_CONCAT(table_picture_news.filename) AS imageNames
    FROM (
      SELECT * FROM table_news
      WHERE table_news.dateNews BETWEEN ? AND ?  -- Добавлено условие WHERE
      ORDER BY idNews DESC
      LIMIT 20
    ) table_news
    LEFT JOIN table_picture_news ON table_picture_news.content_id = table_news.oldIndex
    GROUP BY table_news.idNews
    ORDER BY table_news.idNews DESC;
  `;

  db.query(query, [startDate, endDate], (err, result) => {  // Передаем параметры для запроса вместе с [startDate, endDate]
    if (err) {
      console.error('Ошибка при получении новостей: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json(result);
    }
  });
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


app.post('/api/addNews', (req, res) => {
  const newsData = req.body;

  // Вывод данных в консоль
  console.log('Получены новые данные:', newsData);

  // Здесь вы можете добавить логику сохранения в базу данных

  // Ответ клиенту
  res.status(200).send('Новость успешно добавлена в консоль сервера');
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