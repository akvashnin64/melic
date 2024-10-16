import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminAnonsSection = () => {
    const [operation, setOperation] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState();
    const [deleteAnonsId, setDeleteAnonsId] = useState('');
    const [listAnons, setListAnons] = useState([]);
    const [selectedAnons, setSelectedAnons] = useState();
    const [selectedAnonsData, setSelectedAnonsData] = useState(null);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleIdChange = (event) => {
        event.preventDefault();
        const id = document.querySelector('#idDeletedAnons').value;
        setDeleteAnonsId(id);
    }

    useEffect(() => {
        const anonsData = listAnons.find(anons => anons.idAnons === parseInt(selectedAnons));
        setSelectedAnonsData(anonsData);
    
        if (anonsData) {
            setTitle(anonsData.titleAnons || '');
            setDate(anonsData.dateAnons || '');
        }
    }, [selectedAnons, listAnons]);

    const handleDeleteAnons = async (event) => {
        event.preventDefault();
        try {
          if (!Number.isInteger(Number(deleteAnonsId))) {
            alert('ID анонса должно быть целым числом');
            return;
          }
    
          const response = await fetch(`http://194.58.126.202/api/deleteAnons/${deleteAnonsId}`, {
            method: 'DELETE',
          });
    
          if (!response.ok) {
            throw new Error(`Ошибка при удалении анонса Код ошибки: ${response.status}`);
          }
    
          console.log('Анонс успешно удалена');
        } catch (error) {
          console.error('Ошибка:', error.message);
        }
      };

    const saveAnons = async (anonsData) => {
        try {
            const authorAnons = 2;

            const formData = new FormData();
            formData.append('authorAnons', authorAnons)
            formData.append('titleAnons', anonsData.title)
            formData.append('dateAnons', anonsData.date)
            formData.append('fileAnons', selectedFiles)
    
            // Отправка запроса на добавление новости
            const response = await fetch('http://194.58.126.202:3001/api/addAnons', {
                method: 'POST',
                body: formData
            });
        } catch (error) {
            console.error('Ошибка:', error.message);
        }
    };

    const handleSaveAnons = (event) => {
        event.preventDefault();

        // Получение данных из полей ввода и файлов
        const title = document.querySelector('#titleInput').value;
        const date = document.querySelector('#dateInput').value;
        saveAnons({ title, date });
    };

    useEffect(() => {
        const fetchListAnons = async () => {
            try {
                const response = await fetch('http://194.58.126.202:3001/getLastAnonses');
                const data = await response.json();
                setListAnons(data);
            } catch (error) {
                console.error('Ошибка при запросе вакансий: ', error);
            }
        };

        fetchListAnons();
    }, []);


    const handleUpdateAnons = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://194.58.126.202:3001/updateInfoAboutAnons', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idAnons: selectedAnons,
                    titleAnons: title,
                    dateAnons: date
                }),
            });
    
            if (response.ok) {
                console.log('Информация об анонсе успешно обновлена');
            } else {
                console.error('Ошибка при обновлении информации об анонсе:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса на обновление информации об анонсе: ', error);
        }
    };

    const handleFileChange = (event) => {
        // Обработчик изменения выбранных файлов
        event.preventDefault();
        const file = event.target.files[0];
        setSelectedFiles(file);
    };

    return(
        <>
            <AdminMenu/>
            <div className="adminSection">
                <div className="pointInAdminPage">
                    <Link 
                        className="textPointInAdminPage"
                        onClick={() => setOperation("add")}>
                            Добавить анонс
                    </Link>
                    {operation === "add" && (
                        <form 
                            className="adminForm" 
                            encType="multipart/form-data"
                            >
                            <label>
                                Введите заголовок и дату анонса:
                            </label>

                            <input
                                id="titleInput" 
                                type="text" 
                                placeholder="Заголовок" />
                            <input 
                                id="dateInput" 
                                type="date" 
                                placeholder="Дата анонса" />
                            
                            <label>
                                Прикрепите фото:
                            </label>
                            
                            <input 
                                id="fileInput" 
                                type="file" 
                                onChange={handleFileChange} 
                                multiple accept="image/*" />

                            <button 
                                onClick={(event) => handleSaveAnons(event)}>
                                    Сохранить
                            </button>
                        </form>
                    )}
                </div>

                <div className="pointInAdminPage">
                    <Link 
                        className="textPointInAdminPage" 
                        onClick={() => setOperation("delete")}>
                            Удалить анонс
                    </Link>
                    {operation === "delete" && (
                        <form className="adminForm">
                            <div>
                                <label>
                                    Впишите в поле ниже id удаляемого анонса:
                                </label>

                                <input 
                                    type="text"
                                    id="idDeletedAnons"
                                    placeholder="ID анонса" 
                                    onChange={(event) => handleIdChange(event)} />

                                <button 
                                    onClick={(event) => handleDeleteAnons(event)}>
                                        Удалить
                                </button>
                            </div>
                        </form>
                        
                    )}
                </div>

                <div className="pointInAdminPage">
                    <Link 
                        className="textPointInAdminPage" 
                        onClick={() => setOperation("edit")}>
                            Изменить анонс
                    </Link>
                    {operation === "edit" && (
                        <form 
                            className="adminForm"
                            //encType="multipart/form-data"
                        >
                            <div>
                                <label>
                                    Выберите нужный анонс из списка:
                                </label>

                                <select
                                    value=""
                                    onChange={(e) => setSelectedAnons(e.target.value)}
                                    >
                                        <option value="">Выберите анонс</option>
                                        {listAnons.map(anons => (
                                        <option key={anons.idAnons} value={anons.idAnons}>
                                            {anons.titleAnons}
                                        </option>
                                        ))}

                                </select>

                                <label>
                                    В этих полях вы можете изменить значения для выбранного анонса. <br></br>
                                    Для принятия изменений нажмите кнопку ниже.
                                </label>

                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <button
                                    onClick={(event) => handleUpdateAnons(event)}>
                                    Сохранить изменения
                                </button>
                            </div>
                        </form>
                        
                    )}
                </div>
            </div>
        </>
    )
        
}

export default AdminAnonsSection