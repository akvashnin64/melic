import React from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminVideoSection = () => {
    return(
        <div className="adminSection">
            <AdminMenu />
            <div className="pointInAdminPage">
                <Link>Добавить видео в галерею</Link>
            </div>

            <div className="pointInAdminPage">
                <Link>Удалить видео из галереи</Link>
            </div>
        </div>
    )
}

export default AdminVideoSection