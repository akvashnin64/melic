const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); 
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const debug = require('debug')('app:server');

const newsStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const newsIndex = req.body.newsIndex;
    const uploadPath = path.join(__dirname, 'graphContent', 'news', newsIndex);
    createNewsFolder(newsIndex); // Создаем папку с индексом новости, если она еще не существует
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const photosStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'graphContent', 'photoSlider'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const anonsStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'graphContent', 'anonses'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const uploadNews = multer({ storage: newsStorage });
const uploadPhotos = multer({ storage: photosStorage });
const uploadAnons = multer({ storage: anonsStorage });

const createNewsFolder = (newsIndex) => {
  const folderPath = path.join(__dirname, 'graphContent', 'news', newsIndex);

  // Проверяем, существует ли папка, и создаем ее, если нет
  if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
  }
};

const app = express();

const port = 3001;

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
  host: '194.58.126.202',
  port: '3306', 
  user: 'smvh_mysql',
  password: 'Gr46jghj56',
  database: 'smvh_db'
});

db.connect(err => {
  if (err) {
    console.error('Ошибка подключения к базе данных: ', err);
  } else {
    console.log('Подключено к базе данных');
  }
});

app.get('/getBranchesById/:id', (req, res) => {
  const id = req.params.id;

  const query = `
    SELECT *
    FROM table_branches
    WHERE idBranch = ?
  `

  db.query(query, [id], (error, results) => {
    if (error) {
      console.error('Ошибка при получении филиалa: ', error);
      res.status(500).send('Ошибка сервера');
    } else {
      res.json(results[0]);
    }
  });
})

app.get('/getListBranchesForVacancy', (req, res) => {
  const query = `
    SELECT *
    FROM table_branches_vacancy
  `
  db.query(query, (err, result) => {
    if (err) {
      console.error('Ошибка при получении филиалов для вакансий: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json(result);
    }
  });
})

app.post('/getVacancyForIdBranche', (req, res) => {
  const { branchId } = req.body;

  const query = `SELECT * FROM table_vacancy WHERE IdBranche = ?`;

db.query(query, [branchId], (err, result) => {
  if (err) {
    console.error('Ошибка при выполнении SQL-запроса: ', err);
    res.status(500).send(`Ошибка сервера: ${err.message}`);
  } else {
    res.status(200).json(result);
  }
});
});

app.get('/getAllVacancy', (req, res) => {
  const query = `
      SELECT
      tv.idVacancy,
      tbv.idBranch,
      tbv.nameBranch,
      tv.vacancy,
      tbv.phoneBranch
    FROM
      table_vacancy tv
    JOIN
      table_branches_vacancy tbv ON tv.idBranche = tbv.idBranch;
  `

  db.query(query, (err, result) => {
    if (err) {
      console.error('Ошибка при получении вакансий: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json(result);
    }
  });
})

app.post('/addVacancy', (req, res) => {
  const { branchId, vacancyName } = req.body;

  const query = `INSERT INTO table_vacancy (idBranche, vacancy) VALUES (?, ?)`;

db.query(query, [branchId, vacancyName], (err, result) => {
  if (err) {
    console.error('Ошибка при выполнении SQL-запроса: ', err);
    res.status(500).send(`Ошибка сервера: ${err.message}`);
  } else {
    res.status(200).json(result);
  }
});
});


app.delete('/deleteVacancy', (req, res) => {
  const {idVacancy} = req.body;

  const query = `DELETE FROM table_vacancy WHERE idVacancy = ?`;

  db.query(query, [idVacancy], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении SQL-запроса: ', err);
      res.status(500).send(`Ошибка сервера: ${err.message}`);
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/getPhotos', (req, res) => {
  const query = `
    SELECT *
    FROM table_photos
  `

  db.query(query, (err, result) => {
    if (err) {
      console.error('Ошибка при получении фотографий: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json(result);
    }
  });
})

app.get('/getVideos', (req, res) => {
  const query = `
    SELECT *
    FROM table_video
  `

  db.query(query, (err, result) => {
    if (err) {
      console.error('Ошибка при получении видео: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json(result);
    }
  });
})


app.get('/getBranches', (req, res) => {
  const query = `
    SELECT *
    FROM table_branches
  `

  db.query(query, (err, result) => {
    if (err) {
      console.error('Ошибка при получении филиалов: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json(result);
    }
  });
})

app.patch('/updateInfoAboutBranche', (req, res) => {
  const { idBranch, addressBranch, phoneBranch, emailBranch, directorBranch } = req.body;

  const query = `
    UPDATE table_branches
    SET
      addressBranch = ?,
      phoneBranch = ?,
      emailBranch = ?,
      directorBranch = ?
    WHERE
      idBranch = ?;
  `;

  db.query(query, [idBranch, addressBranch, phoneBranch, emailBranch, directorBranch], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Информация о филиале успешно обновлена');
    }
  });
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

app.post('/api/addAnons', uploadAnons.array('fileAnons'), (req, res) => {
  const { authorAnons, titleAnons, dateAnons } = req.body;
  const filename = req.files[0].filename;
  const sortorder = 1;

  const query = `
    INSERT INTO table_anonses (authorAnons, titleAnons, dateAnons)
    VALUES (?, ?, ?);
  `;

  db.query(query, [authorAnons, titleAnons, dateAnons], (err, result) => {
    if (err) {
      res.status(500).send('Ошибка сервера' + err.message);
    } else {
      const anonsId = result.insertId;

      const query2 = `
        INSERT INTO table_picture_anonses (content_id, filename, sortorder)
        VALUES (?, ?, ?);
      `;

      db.query(query2, [anonsId, filename, sortorder], (err, result) => {
        if (err) {
          res.status(500).send('Ошибка сервера' + err.message);
        } else {
          res.status(200).json({ anonsId });
        }
      });
    }
  });
});

app.delete('/api/deleteAnons/:id', (req, res) => {
  const anonsId = req.params.id;

  // Проверяем, что newsId - это целое число
  if (!Number.isInteger(Number(anonsId))) {
    return res.status(400).send('ID анонса должно быть целым числом');
  }

  const deleteNewsQuery = `
    DELETE FROM table_anonses
    WHERE idAnons = ?;
  `;

  db.query(deleteNewsQuery, [anonsId], (err, result) => {
    if (err) {
      console.error('Ошибка при удалении анонса: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).send('Анонс успешно удален из базы данных');
    }
  });
});

app.patch('/updateInfoAboutAnons', (req, res) => {
  const { idAnons, titleAnons, dateAnons } = req.body;

  const query = `
    UPDATE table_anonses
    SET
      titleAnons = ?,
      dateAnons = ?
    WHERE
      idAnons = ?;
  `;

  db.query(query, [titleAnons, dateAnons, idAnons], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Информация о филиале успешно обновлена');
    }
  });
});

app.post('/api/uploadPhotos', uploadPhotos.array('photos'), (req, res) => {
  try {
      const photos = req.files.map((file, index) => ({
          filename: file.filename
      }));

      // Сохраняем информацию о загруженных файлах в базу данных
      const query = `INSERT INTO table_photos (filename) VALUES (?)`;
      db.beginTransaction((err) => {
          if (err) {
              throw err;
          }
          db.query(query, photos.flatMap(photo => photo.filename), (err, result) => {
              if (err) {
                  db.rollback(() => {
                      throw err;
                  });
              }
              db.commit((err) => {
                  if (err) {
                      db.rollback(() => {
                          throw err;
                      });
                  }
                  console.log('Информация о изображениях успешно сохранена в базе данных');
                  res.status(200).json({});
              });
          });
      });
  } catch (error) {
      console.error('Ошибка:', error.message);
      res.status(500).send('Ошибка сервера');
  }
});

app.delete('/deletePhoto', (req, res) => {
  const {selectedPhotoId} = req.body;

  const query = `DELETE FROM table_photos WHERE idPhoto = ?`;

  db.query(query, [selectedPhotoId], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении SQL-запроса: ', err);
      res.status(500).send(`Ошибка сервера: ${err.message}`);
    } else {
      res.status(200).json(result);
    }
  });
});


app.post('/api/addNews', (req, res) => {
  const { oldIndex, authorNews, title, date, text } = req.body;

  const query = `INSERT INTO table_news ( oldIndex, authorNews, titleNews, dateNews, textNews) VALUES (?, ?, ?, ?, ?);`;

  db.query(query, [ oldIndex, authorNews, title, date, text], (err, result) => {
    if (err) {
      res.status(500).send('Ошибка сервера', err.message);
    } else {
      const newsId = result.insertId; 
      res.status(200).json({ newsId }); 
    }
  });
});

app.patch('/api/addOldIndex', (req, res) => {
  const {idNews} = req.body;

  const query = `UPDATE table_news SET oldIndex = ? WHERE idNews = (? - 1000)`;

  db.query(query, [idNews, idNews], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json({ result });
    }
  });
})

app.post('/api/uploadNewsImages', uploadNews.array('images'), (req, res) => {
  try {
      const newsIndex = parseInt(req.body.newsIndex, 10);
      const images = req.files.map((file, index) => ({
          content_id: newsIndex,
          filename: file.filename,
          sortorder: index
      }));

      // Сохраняем информацию о загруженных файлах в базу данных
      const query = `INSERT INTO table_picture_news (content_id, filename, sortorder) VALUES (?, ?, ?)`;
      db.beginTransaction((err) => {
          if (err) {
              throw err;
          }
          db.query(query, images.flatMap(image => [image.content_id, image.filename, image.sortorder]), (err, result) => {
              if (err) {
                  db.rollback(() => {
                      throw err;
                  });
              }
              db.commit((err) => {
                  if (err) {
                      db.rollback(() => {
                          throw err;
                      });
                  }
                  console.log('Информация о изображениях успешно сохранена в базе данных');
                  res.status(200).json({ newsIndex });
              });
          });
      });
  } catch (error) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Ошибка сервера');
  }
});

app.patch('/api/updateInfoAboutNew', (req, res) => {
  const { oldIndex, titleNews, textNews } = req.body;

  const query = `UPDATE table_news SET titleNews = ?, textNews = ? WHERE oldIndex = ?;`;

  db.query(query, [titleNews, textNews, oldIndex], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).send('Информация о новости успешно обновлена');
    }
  });
});

app.delete('/api/deleteNews/:id', (req, res) => {
  const idNews = req.params.id;

  if (!Number.isInteger(Number(idNews))) {
    return res.status(400).send('ID новости должно быть целым числом');
  }

  const deleteNewsQuery = `DELETE FROM table_news WHERE idNews = ?;`;

  db.query(deleteNewsQuery, [idNews], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).send('Новость успешно удалена из базы данных');
    }
  });
});

/////////////////////////////////////////////////////////////////////////

//////////////////////////////  FILES  //////////////////////////////////

app.get('/api/getFiles', (req, res) => {
  const query = `SELECT * FROM table_files ORDER BY idFile DESC;`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json(result);
    }
  });
});

app.post('/api/getFileById', (req, res) => {
  const { idFile } = req.body;
  const idFileAsNumber = parseInt(idFile, 10);

  console.log(idFileAsNumber);

  const getOneFileQuery = `SELECT * FROM table_files WHERE idFile = ?;`;

  db.query(getOneFileQuery, [idFileAsNumber], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).json(result);
    }
  });
});

app.delete('/api/deleteFile/:id', (req, res) => {
  const { idFile } = parseInt(req.body, 10);
  const idFileAsNumber = parseInt(idFile, 10);

  console.log(idFileAsNumber);

  const deleteFileQuery = `DELETE FROM table_files WHERE idFile = ?;`;

  db.query(deleteFileQuery, [idFileAsNumber], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send('Ошибка сервера');
    } else {
      res.status(200).send('Файл успешно удален из базы данных');
    }
  });
});

app.post('/api/addFile', (req, res) => {
  const { filename, summary } = req.body;

  const addFileQuery = `INSERT INTO table_files (filename, summary) VALUES (?, ?)`;

  db.query(addFileQuery, [filename, summary], (err, result) => {
    if (err) {
      console.error('Ошибка при выполнении запроса: ', err);
      res.status(500).send(`Ошибка сервера: ${err.message}`);
    } else {
      res.status(200).send('Файл успешно загружен');
    }
  });
});

///////////////////////////////////////////////////////////////////////////

///////////////////////////////// AUTH ////////////////////////////////////

app.post('/api/auth', (req, res) => {
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
        user.authToken = token;
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

app.get('*', (req, res) => {
  const acceptHeader = req.get('Accept');
  if (acceptHeader && acceptHeader.includes('text/html'))
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});