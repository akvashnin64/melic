import React from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminAnonsSection = () => {
    return(
        <>
            <AdminMenu/>
            <div className="adminSection">
                <div className="pointInAdminPage">
                    <Link>Добавить анонс</Link>
                </div>

                <div className="pointInAdminPage">
                    <Link>Удалить анонс</Link>
                </div>

                <div className="pointInAdminPage">
                    <Link>Изменить анонс</Link>
                </div>
            </div>
        </>
    )
        
}

export default AdminAnonsSection