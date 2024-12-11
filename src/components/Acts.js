import React, { useState, useEffect } from 'react';

const Acts = () => {
    const [filesData, setFilesData] = useState([]);

    useEffect(() => {
        fetch('http://194.58.126.202:3001/api/getFiles')
            .then(response => response.json())
            .then(data => {
                setFilesData(data.map(file => ({
                    index: file.idFile,
                    filename: file.filename,
                    summary: file.summary,
                    isLocalFile: file.isLocalFile
                })));
            })
            .catch(error => console.error('Ошибка при запросе файлов: ', error));
    }, []);

    function getLinkForFile(file) {
        if (file.isLocalFile) {
            return `/graphContent/documents/${file.filename}`; // Абсолютный путь
        }
        return file.filename; // Оставляем внешний путь без изменений
    }

    return (
        <div className='containerActs'>
            {filesData.map((file) => (
                <div key={file.index} className='containerOneActs'>
                    <a href={getLinkForFile(file)} target="_blank" rel="noopener noreferrer">
                        <img className="groupActs" src="/img/group.png" alt="Group" />
                        <p>{file.summary}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Acts;