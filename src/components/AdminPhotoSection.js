import React from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminPhotoSection = () => {
    return(
        <div className="adminSection">
            <AdminMenu/>
            <div className="pointInAdminPage">
                <Link>Добавить фото в галерею</Link>
            </div>

            <div className="pointInAdminPage">
                <Link>Удалить фото из галерею</Link>
            </div>
        </div>
    )
}

export default AdminPhotoSection