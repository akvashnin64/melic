import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminVacancySection = () => {
    const [listBranches, setListBranches] = useState([]);
    const [operation, setOperation] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedVacancy, setSelectedVacancy] = useState('');
    const [vacancies, setVacancies] = useState([]);
    const [idVacancy, setIdVacancy] = useState();

    const addVacancy = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://89.111.154.224:3001/addVacancy', {
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
            const response = await fetch('http://89.111.154.224:3001/getVacancyForIdBranche', {
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
            const response = await fetch('http://89.111.154.224:3001/deleteVacancy', {
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
                const response = await fetch('http://89.111.154.224:3001/getListBranchesForVacancy');
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
                        Добавить новую вакансию
                    </Link>
                    {operation === "add" && (
                        <form className="adminForm" encType="multipart/form-data" onSubmit={addVacancy}>
                            <select
                                value={selectedBranch}
                                onChange={(e) => setSelectedBranch(e.target.value)}
                            >
                                <option value="">Выберите филиал</option>
                                {listBranches.map(branch => (
                                    <option key={branch.id} value={branch.id}>
                                        {branch.nameBranch}
                                    </option>
                                ))}
                            </select>

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
                        Удалить существующую вакансию
                    </Link>
                    {operation === "delete" && (
                        <form className="adminForm" encType="multipart/form-data" onSubmit={deleteVacancy}>
                            <select
                                value={selectedBranch}
                                onChange={(e) => getVacancysForId(e.target.value)}
                            >
                                <option value="">Выберите филиал</option>
                                {listBranches.map(branch => (
                                    <option key={branch.id} value={branch.id}>
                                        {branch.nameBranch}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={selectedVacancy}
                                onChange={(e) => setSelectedVacancy(e.target.value)}
                            >
                                {vacancies.map(vacancy => (
                                    <option key={vacancy.id} value={vacancy.id}>
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