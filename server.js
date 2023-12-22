const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); 

// Создаем транспорт для отправки электронных писем
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akvashnin64@gmail.com',
    pass: 'Gue463hehu11',
  },
});

app.post('/api/send-feedback', async (req, res) => {
  try {
    const formData = req.body;

    // Ваш код обработки данных формы здесь

    console.log('Получены данные формы:', formData);

    // Оставим отправку письма асинхронной
    await sendEmail(formData);

  } catch (error) {
    console.error('Ошибка при обработке данных формы:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера', details: error.message });
  }
});

async function sendEmail(formData) {
  try {
    const info = await transporter.sendMail({
      from: '"Саратовмелиоводхоз" <akvashnin64@gmail.com>',
      to: 'akvashnin64@gmail.com',
      subject: 'Ответ по вашему обращению',
      text: `Имя: ${formData.nameFeedback}\nEmail: ${formData.emailFeedback}\nСообщение: ${formData.textFeedback}`,
    });

    console.log('Письмо успешно отправлено', info.response);
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    throw error; // Передайте ошибку выше для обработки в блоке catch в обработчике формы
  }
}

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});