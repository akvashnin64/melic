import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminVacancySection = () => {
    const [listBranches, setListBranches] = useState([]);
    const [operation, setOperation] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedBranchId, setSelectedBranchId] = useState('');
    const [selectedVacancy, setSelectedVacancy] = useState('');
    const [vacancies, setVacancies] = useState([]);
    const [idVacancy, setIdVacancy] = useState();

    const addVacancy = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://194.58.126.202:3001/api/addVacancy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    branchId: selectedBranch,
                    vacancyName: e.target.textVacancy.value,
                }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Ошибка при отправке данных на сервер: ', error);
        }
    };

    const getVacancysForId = async (branchId) => {
        setSelectedBranch(branchId);

        try {
            const response = await fetch('http://194.58.126.202:3001/api/getVacancyForIdBranche', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ branchId }),
            });

            const data = await response.json();
            setVacancies(data);
        } catch (error) {
            console.error('Ошибка при запросе вакансий для филиала: ', error);
        }
    };

    const deleteVacancy = async () => {
        try {
            const response = await fetch('http://194.58.126.202:3001/api/deleteVacancy', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idVacancy: selectedVacancy,
                }),
            });
    
            if (response.ok) {
                console.log('Вакансия успешно удалена');
            } else {
                console.error('Ошибка при удалении вакансии:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса на удаление: ', error);
        }
    };

    useEffect(() => {
        const fetchListBranches = async () => {
            try {
                const response = await fetch('http://194.58.126.202:3001/api/getListBranchesForVacancy');
                const data = await response.json();
                setListBranches(data);
            } catch (error) {
                console.error('Ошибка при запросе вакансий: ', error);
            }
        };

        fetchListBranches();
    }, []);

    return (
        <>
            <AdminMenu />
            <div className="adminSection">
                <div className="pointInAdminPage">
                    <Link className="" onClick={() => setOperation("add")}>
                        <p className="textPointInAdminPage">Добавить новую вакансию</p>
                    </Link>
                    {operation === "add" && (
                        <form className="adminForm" encType="multipart/form-data" onSubmit={addVacancy}>
                            <label>
                                Выберите филиал из списка:
                            </label>
                            
                            <select
                                value={selectedBranch}
                                onChange={(e) => setSelectedBranch(e.target.value)}
                            >
                                <option value="">Выберите филиал</option>
                                {listBranches.map(branch => (
                                    <option key={branch.idBranch} value={branch.idBranch}>
                                        {branch.nameBranch}
                                    </option>
                                ))}
                            </select>

                            <label>
                                Введите вакансию, которую необходимо добавить для выбранного филиала. <br></br>
                                Для принятия изменений нажмите кнопку ниже.
                            </label>
    
                            <input
                                type="text"
                                placeholder="Введите название вакансии"
                                name="textVacancy"
                            />
    
                            <button type="submit">Добавить</button>
                        </form>
                    )}
                </div>
    
                <div className="pointInAdminPage">
                    <Link className="" onClick={() => setOperation("delete")}>
                        <p className="textPointInAdminPage">Удалить существующую вакансию</p>
                    </Link>
                    {operation === "delete" && (
                        <form className="adminForm" encType="multipart/form-data" onSubmit={deleteVacancy}>
                            <label>
                                Выберите филиал из списка:
                            </label>
                            
                            <select
                                value={selectedBranch}
                                onChange={(e) => {
                                    setSelectedBranch(e.target.value);
                                    getVacancysForId(e.target.value);
                                }}
                            >
                                <option value="">Выберите филиал</option>
                                {listBranches.map(branch => (
                                    <option key={branch.idBranch} value={branch.idBranch}>
                                        {branch.nameBranch}
                                    </option>
                                ))}
                            </select>

                            <label>
                                Выберите из списка вакансию, которую необходимо удалить.<br></br>
                                Для принятия изменений нажмите кнопку ниже.
                            </label>
    
                            <select
                                value={selectedVacancy}
                                onChange={(e) => setSelectedVacancy(e.target.value)}
                            >
                                <option value="">Выберите вакансию</option>
                                {vacancies.map(vacancy => (
                                    <option key={vacancy.idVacancy} value={vacancy.idVacancy}>
                                        {vacancy.vacancy}
                                    </option>
                                ))}
                            </select>
    
                            <button type="submit">Удалить</button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminVacancySection;