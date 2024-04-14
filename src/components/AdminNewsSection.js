import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminNewsSection = () => {
    // Состояние для отслеживания текущей операции (добавление, удаление, изменение)
    const [operation, setOperation] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [deleteNewsId, setDeleteNewsId] = useState('');

  const handleDeleteNews = async () => {
    try {
      // Проверяем, что deleteNewsId - это целое число
      if (!Number.isInteger(Number(deleteNewsId))) {
        alert('ID новости должно быть целым числом');
        return;
      }

      const response = await fetch(`http://89.111.154.224/api/deleteNews/${deleteNewsId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Ошибка при удалении новости Код ошибки: ${response.status}`);
      }

      console.log('Новость успешно удалена');

      // Дополнительная логика, которую вы хотите выполнить после удаления новости

    } catch (error) {
      console.error('Ошибка:', error.message);
      // Дополнительная логика обработки ошибки, если необходимо
    }
  };

    const handleFileChange = (event) => {
        // Обработчик изменения выбранных файлов
        event.preventDefault();
        const files = [];

        for (let i = 0; i < event.target.files.length; i++) {
            const file = event.target.files[i];
            files.push(file);
          }

        console.log(files);

        setSelectedFiles(files);
    };

    const saveNews = async (newsData) => {
        try {
            console.log('Отправка запроса на сервер для добавления новости...');
            console.log('Данные новости:', newsData);

            const oldIndex = 1;
            const authorNews = 2;
    
            const response = await fetch('http://89.111.154.224:3001/api/addNews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    oldIndex: oldIndex,
                    authorNews: authorNews,
                    title: newsData.title,
                    text: newsData.text,
                    date: newsData.date
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Ответ от сервера:', data);
                console.log('Новость успешно добавлена');
            } else {
                throw new Error('Ошибка при добавлении новости. Код ошибки: ' + response.status);
            }
        } catch (error) {
            console.error('Ошибка:', error.message);
        }
    };

    const handleSaveNews = (event) => {
        event.preventDefault();

        // Получение данных из полей ввода и файлов
        const title = document.querySelector('#titleInput').value;
        const text = document.querySelector('#textInput').value;
        const date = document.querySelector('#dateInput').value;

        console.log("Данные из формы:", { title, text, date });

        // Отправка данных на сервер
        saveNews({ title, text, date });
    };
    

    return (
        <>
        <AdminMenu />
        <div className="adminSection">
            <div className="pointInAdminPage">
                <Link 
                    className="textPointInAdminPage"
                    onClick={() => setOperation("add")}>
                        Добавить новость
                </Link>
                {operation === "add" && (
                    // Поля ввода для добавления новости
                    <form className="adminForm">
                        <label>
                            Введите заголовок, дату и описание новости:
                        </label>

                        <input
                            id="titleInput" 
                            type="text" 
                            placeholder="Заголовок" />
                        <input 
                            id="textInput" 
                            type="text" 
                            placeholder="Текст новости" />
                        <input 
                            id="dateInput" 
                            type="date" 
                            placeholder="Дата новости" />
                        
                        <label>
                            При необходимости вы можете прикрепить к новости фотографии (до 10 штук) в поле ниже:
                        </label>
                        
                        <input 
                            id="fileInput" 
                            type="file" 
                            onChange={handleFileChange} 
                            multiple accept="image/*" />

                        <button 
                            onClick={(event) => handleSaveNews(event)}>
                                Сохранить
                        </button>
                    </form>
                )}
            </div>

            <div className="pointInAdminPage">
                <Link className="textPointInAdminPage" onClick={() => setOperation("delete")}>Удалить новость</Link>
                {operation === "delete" && (
                    <div>
                        <input type="text" placeholder="ID новости" onClick={handleDeleteNews}/>
                        <button>Удалить</button>
                    </div>
                )}
            </div>

            <div className="pointInAdminPage">
                <Link className="textPointInAdminPage" onClick={() => setOperation("edit")}>Изменить новость</Link>
                {operation === "edit" && (
                    // Поля ввода для изменения новости
                    <div>
                        <input type="text" placeholder="ID новости" />
                        <input type="text" placeholder="Новый заголовок" />
                        <input type="text" placeholder="Новый текст новости" />
                        {/* Другие поля, если необходимо */}
                        <button>Сохранить изменения</button>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default AdminNewsSection;