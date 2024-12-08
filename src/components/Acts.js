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
                summary: file.summary
            })));
        })
        .catch(error => console.error('Ошибка при запросе файлов: ', error));
    }, []);

    return (
        <div className='containerActs'>
            {filesData.map((file) => (
                <div className='containerOneActs'>
                    <a href={file.filename} key={file.index} target="_blank"> 
                        <img className="groupActs" src="/img/group.png"/>
                        <p>{file.summary}</p>
                    </a>
                </div>
            ))}
        </div>
    );
    };
  
  export default Acts;