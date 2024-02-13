const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); 
const mysql = require('mysql');
const path = require('path');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3001; // Подставь свой порт

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

const imagesPath = path.join(__dirname, 'graphContent');

app.use('/graphContent', (req, res, next) => {
  const url = req.url.toLowerCase();

  if (url.includes('/var/www/html/graphContent'))
    res.setHeader('Content-Type', 'image/jpeg');

  next();
});

app.use('/graphContent', express.static(imagesPath));
app.use(express.static(path.join(__dirname, 'build')));

const db = mysql.createConnection({
  host: '89.111.154.224', // Адрес сервера базы данных
  port: '3306', 
  user: 'smvh_mysql', // Имя пользователя базы данных
  password: 'gsV4Hsf/53n', // Пароль пользователя базы данных
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
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;

  const query = `
    SELECT
      table_news.oldIndex,
      table_news.titleNews,
      table_news.dateNews,
      table_news.textNews,
      GROUP_CONCAT(table_picture_news.filename) AS imageNames
    FROM (
      SELECT * FROM table_news
      WHERE table_news.dateNews BETWEEN ? AND ? 
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
      GROUP_CONCAT(table_picture_news.filename) AS imageNames,
      COUNT(table_picture_news.filename) AS imageCount
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
      LIMIT 50
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

app.get('/getLastAnonses', (req, res) => {
  const query = `
    SELECT
      table_anonses.idAnons,
      table_anonses.authorAnons,
      table_anonses.titleAnons,
      table_anonses.dateAnons,
      GROUP_CONCAT(table_picture_anonses.filename) AS imageNames
  FROM (
      SELECT * FROM table_anonses
      ORDER BY idAnons DESC
      LIMIT 20
  ) table_anonses
  LEFT JOIN table_picture_anonses ON table_picture_anonses.content_id = table_anonses.idAnons
  GROUP BY table_anonses.idAnons
  ORDER BY table_anonses.idAnons DESC;
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
  const md5Password = md5(password);

  const query = `SELECT * FROM table_users WHERE user_login = ? AND user_password = ?`;

  db.query(query, [login, md5Password], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      if (result.length > 0) {
        const user = result[0];
        const token = jwt.sign({ userId: user.user_id }, 'FDH245bnmhsNG4SJs6743', { expiresIn: '1h' });

        // Добавляем токен к объекту ответа
        user.authToken = token;

        // Отправляем объект ответа с токеном
        res.status(200).json(user);
      } else {
        res.status(401).send('Неверный логин или пароль');
      }
    }
  });
});



app.post('/validate-token', (req, res) => {
  const token = req.headers.cookie ? req.headers.cookie.split('=')[1] : null; // Получаем токен из заголовка

  if (!token) {
    return res.status(401).send('Токен отсутствует');
  }

  jwt.verify(token, 'FDH245bnmhsNG4SJs6743', (err, decoded) => {
    if (err) {
      console.error('Ошибка при валидации токена: ', err);
      res.status(401).send('Невалидный токен');
    } else {
      res.status(200).send('Токен валиден');
    }
  });
});

app.post('/api/send-feedback', async (req, res) => {
  const { nameFeedback, emailFeedback, textFeedback } = req.body;

  // Настройте транспорт для отправки электронной почты (здесь используется nodemailer)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akvashnin64@gmail.com',
      pass: 'Gue463hehu11',
    }
  });

  // Настройте данные для отправки электронного письма
  const mailOptions = {
    from: 'akvashnin64@gmail.com',
    to: 'akvashnin64@gmail.com',
    subject: 'Новое обращение',
    text: `Имя: ${nameFeedback}\nEmail: ${emailFeedback}\nСообщение: ${textFeedback}`,
  };

  try {
    // Отправка электронного письма
    await transporter.sendMail(mailOptions);
    res.status(200).send('Письмо успешно отправлено');
  } catch (error) {
    console.error('Ошибка при отправке электронного письма', error);
    res.status(500).send('Ошибка при отправке электронного письма');
  }
});

app.get('*', (req, res) => {
  const acceptHeader = req.get('Accept');
  if (acceptHeader && acceptHeader.includes('text/html'))
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});