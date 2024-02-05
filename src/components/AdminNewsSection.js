import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminNewsSection = () => {
    // Состояние для отслеживания текущей операции (добавление, удаление, изменение)
    const [operation, setOperation] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        // Обработчик изменения выбранных файлов
        const files = Array.from(event.target.files).slice(0, 10);
        setSelectedFiles(files);
    };

    const saveNews = async (newsData) => {
        try {
            const response = await fetch('http://localhost:3001/api/addNews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newsData),
            });
    
            if (!response.ok) throw new Error('Ошибка при добавлении новости');
            
            console.log('Новость успешно добавлена');
        } catch (error) {
            console.error('Ошибка:', error.message);
        }
    };

    const handleSaveNews = () => {
        // Получение данных из полей ввода и файлов
        const title = document.querySelector('#titleInput').value;
        const text = document.querySelector('#textInput').value;
        const date = document.querySelector('#dateInput').value;

        // Отправка данных на сервер
        saveNews({ title, text, date, files: selectedFiles });
    };
    

    return (
        <div className="adminSection">

            <AdminMenu />

            <div className="pointInAdminPage">
                <Link className="" onClick={() => setOperation("add")}>Добавить новость</Link>
                {operation === "add" && (
                    // Поля ввода для добавления новости
                    <div>
                        <input id="titleInput" type="text" placeholder="Заголовок" />
                        <input id="textInput" type="text" placeholder="Текст новости" />
                        <input id="dateInput" type="date" placeholder="Дата новости" />
                        <input id="fileInput" type="file" onChange={handleFileChange} multiple accept="image/*" />

                        <button onClick={handleSaveNews}>Сохранить</button>
                    </div>
                )}
            </div>

            <div className="pointInAdminPage">
                <Link onClick={() => setOperation("delete")}>Удалить новость</Link>
                {operation === "delete" && (
                    // Поля ввода для удаления новости
                    <div>
                        <input type="text" placeholder="ID новости" />
                        {/* Другие поля, если необходимо */}
                        <button>Удалить</button>
                    </div>
                )}
            </div>

            <div className="pointInAdminPage">
                <Link onClick={() => setOperation("edit")}>Изменить новость</Link>
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
    );
}

export default AdminNewsSection;