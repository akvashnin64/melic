import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminActsSection = () => {
    const [operation, setOperation] = useState(null);
    const [listFiles, setListFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState();
    const [inputLink, setInputLink] = useState('');
    const [inputFile, setInputFile] = useState(null);
    const [isLocalFile, setIsLocalFile] = useState(false);

    useEffect(() => {
        const fetchListFiles = async () => {
            try {
                const response = await fetch('http://194.58.126.202:3001/api/getFiles');
                const data = await response.json();
                setListFiles(data);
            } catch (error) {
                console.error('Ошибка при запросе файлов: ', error);
            }
        };

        fetchListFiles();
    }, []);

    const addFile= async (e) => {
        e.preventDefault();

        try {
            if(isLocalFile){
                const formData = new FormData();
                formData.append('file', inputFile);
                formData.append('summary', e.target.summary.value)

                const response = await fetch('http://194.58.126.202:3001/api/addLocalFile',{
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                console.log(data);
            }
            else {
                const response = await fetch('http://194.58.126.202:3001/api/addFile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        filename: e.target.filename.value,
                        summary: e.target.summary.value,
                    }),
                });
    
                const data = await response.json();
                console.log(data);
            }
            
        } catch (error) {
            console.error('Ошибка при отправке данных на сервер: ', error);
        }
    };

    const deleteFile = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://194.58.126.202:3001/api/deleteFile/${selectedFile}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ selectedFile }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Ошибка при отправке данных на сервер: ', error);
        }
    };

    

    const getFileById = async (idFile) => {
        try {
            const response = await fetch('http://194.58.126.202:3001/api/getFileById', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idFile }),
            });

            const data = await response.json();
            setFile(data);
        } catch (error) {
            console.error('Ошибка при получении файла: ', error);
        }
    };

    return (
        <>
            <AdminMenu />
            <div className="adminSection">
                <div className="pointInAdminPage">
                    <Link className="" onClick={() => setOperation("add")}>
                        <p className="textPointInAdminPage">Добавить новый документ</p>
                    </Link>
                    {operation === "add" && (
                        <form className="adminForm" encType="multipart/form-data" method="post" onSubmit={addFile}>
                        <label>
                            Введите название документа. Так он будет отображаться на сайте
                        </label>

                        <input
                            type="text"
                            placeholder="Введите название документа"
                            name="summary"
                        />

                        <label>
                            Вставьте ссылку на документ или загрузите его с вашего компьютера
                        </label>

                        <div>
                            <input
                                type="text"
                                placeholder="Вставьте ссылку"
                                name="filename"
                                value={inputLink}
                                onChange={(e) => {
                                    setInputLink(e.target.value);
                                    setIsLocalFile(false);
                                    if (e.target.value) {
                                        setInputFile(null);
                                    }
                                }}
                                disabled={inputFile !== null}
                            />

                            <input 
                                type="file"
                                name="filename"
                                onChange={(e) => {
                                    setInputFile(e.target.files[0]);
                                    setIsLocalFile(true);
                                    if (e.target.files[0]) {
                                        setInputLink('');
                                    }
                                }}
                                disabled={inputLink !== ''}
                            />
                        </div>

                        <button type="submit">Добавить</button>
                    </form>
                    )}
                </div>

                <div className="pointInAdminPage">
                    <Link className="" onClick={() => setOperation("delete")}>
                        <p className="textPointInAdminPage">Удалить существующий документ</p>
                    </Link>
                    {operation === "delete" && (
                        <form className="adminForm" encType="multipart/form-data" onSubmit={deleteFile}>
                            <label>
                                Выберите из списка документ, который необходимо удалить:<br></br>
                                Для принятия изменений нажмите кнопку ниже.
                            </label>
                            
                            <select
                                value={selectedFile}
                                onChange={(e) => {
                                    setSelectedFile(e.target.value);
                                    getFileById(e.target.value);
                                }}
                            >
                                <option value="">Выберите документ</option>
                                {listFiles.map(oneFile => (
                                    <option key={oneFile.idFile} value={oneFile.idFile}>
                                        {oneFile.summary}
                                    </option>
                                ))}
                            </select>
    
                            <button type="submit">Удалить</button>
                        </form>
                    )}
                </div>

            </div>
        </>
    )
}

export default AdminActsSection;