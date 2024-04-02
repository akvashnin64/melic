import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminBrancheSection = () => {
    const [listBranches, setListBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedBranchData, setSelectedBranchData] = useState(null);

    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [director, setDirector] = useState('');

    useEffect(() => {
        const fetchListBranches = async () => {
            try {
                const response = await fetch('http://89.111.154.224:3001/getBranches');
                const data = await response.json();
                setListBranches(data);
            } catch (error) {
                console.error('Ошибка при запросе вакансий: ', error);
            }
        };

        fetchListBranches();
    }, []);

    useEffect(() => {
        // Найдите данные выбранного филиала в списке и обновите состояние
        const branchData = listBranches.find(branch => branch.idBranch === parseInt(selectedBranch));
        setSelectedBranchData(branchData);

        // Установите значения инпутов в данные выбранного филиала
        if (branchData) {
            setAddress(branchData.addressBranch || '');
            setPhone(branchData.phoneBranch || '');
            setEmail(branchData.emailBranch || '');
            setDirector(branchData.directorBranch || '');
        }
    }, [selectedBranch, listBranches]);

    const updateBranche = async(address, phone, email, director) => {
        try{
            
        } catch (error) {
            
        }
    }

    return (
        <>
            <AdminMenu />
            <div className="adminSection">
                <div className="pointInAdminPage">
                    <form 
                        className="adminForm" 
                        encType="multipart/form-data"
                        //onSubmit={my func}
                    >
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

                        {selectedBranchData && (
                            <div>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={director}
                                    onChange={(e) => setDirector(e.target.value)}
                                />
                            </div>
                        )}
                        
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminBrancheSection;