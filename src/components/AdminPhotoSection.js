import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminPhotoSection = () => {
    const [operation, setOperation] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        event.preventDefault();
        const files = [];

        for (let i = 0; i < event.target.files.length; i++) {
            const file = event.target.files[i];
            files.push(file);
          }

        setSelectedFiles(files);
    };

    const uploadFiles = async () => {
        try {
            const formData = new FormData();

            selectedFiles.forEach((file, index) => {
                formData.append(`photos`, file);
            });
    
            
            // Отправляем FormData на сервер
            const response = await fetch('http://89.111.154.224:3001/api/uploadPhotos', {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                const data2 = await response.json();
                console.log('Файлы успешно загружены на сервер');
            } else {
                throw new Error('Ошибка при загрузке файлов на сервер. Код ошибки: ' + response.status);
            }
        } catch (error) {
            console.error('Ошибка:', error.message);
        }
    };


    return(
        <>
        <AdminMenu/>
        <div className="adminSection">
            
            <div className="pointInAdminPage">
                <Link 
                    className="textPointInAdminPage"
                    onClick={() => setOperation("add")}>
                        Добавить фото в галерею
                </Link>
                {operation === "add" && (
                    <form className="adminForm" encType="multipart/form-data">
                        <label>
                            Выберете фото(до 10 штук), которые нужно добавить:
                        </label>
                        
                        <input 
                            id="fileInput" 
                            type="file" 
                            onChange={handleFileChange} 
                            multiple accept="image/*" />

                        <button 
                            onClick={uploadFiles()}>
                                Сохранить
                        </button>
                    </form>
                )}
            </div>

            <div className="pointInAdminPage">
                <Link>Удалить фото из галереи</Link>
            </div>
        </div>
        </>
    )
}

export default AdminPhotoSection