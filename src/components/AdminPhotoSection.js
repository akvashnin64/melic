import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import PhotoSlider from "../components/PhotoSlider";

const AdminPhotoSection = () => {
    const [photoData, setPhotoData] = useState([]);
    const [operation, setOperation] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedPhotoId, setSelectedPhotoId] = useState(null);

    const handleFileChange = (event) => {
        event.preventDefault();
        const files = [];

        for (let i = 0; i < event.target.files.length; i++) {
            const file = event.target.files[i];
            files.push(file);
          }

        setSelectedFiles(files);
    };

    const handlePhotoSelect = (id) => {
        setSelectedPhotoId(id);
      };

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getPhotos')
        .then(response => response.json())
        .then(data => {
            setPhotoData(data.map(photo => ({
                index: photo.idPhoto,
                namePicture: photo.filename
            })));
        })
        .catch(error => console.error('Ошибка при запросе фото: ', error));
    }, []);

    const basePathImg = "http://194.58.126.202/graphContent/photoSlider";

    const deletePhoto = async (event) => {
        event.preventDefault();
        const deletedId = selectedPhotoId + 1;
        try {
            const response = await fetch('http://194.58.126.202:3001/api/deletePhoto', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ deletedId }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Фото успешно удалено');
            } else {
                throw new Error('Ошибка при загрузке файлов на сервер. Код ошибки: ' + response.status);
            }
        } catch (error) {
            console.error('Ошибка:', error.message);
        }
    };

    const uploadFiles = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();

            selectedFiles.forEach((file, index) => {
                formData.append(`photos`, file);
            });
    
            
            // Отправляем FormData на сервер
            const response = await fetch('http://194.58.126.202:3001/api/uploadPhotos', {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                const data = await response.json();
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
                            onClick={(event) => uploadFiles(event)}>
                                Сохранить
                        </button>
                    </form>
                )}
            </div>

            <div className="pointInAdminPage">
            <Link 
                    className="textPointInAdminPage" 
                    onClick={() => setOperation("delete")}>
                        Удалить фото из галереи
                </Link>
                {operation === "delete" && (
                    <form className="adminForm">
                        <label>
                            Выберете фото, которое нужно удалить:
                        </label>

                        <PhotoSlider 
                            photos={photoData.map(photo => photo.namePicture)} 
                            basePath={basePathImg}
                            visibleHeader={false}
                            onImageSelect={handlePhotoSelect} 
                            inAdmin={true}
                            />
                            {console.log(selectedPhotoId)}

                        <button 
                            onClick={(event) => deletePhoto(event)}>
                                Удалить
                        </button>
                    </form>
                    
                )}
            </div>
        </div>
        </>
    )
}

export default AdminPhotoSection