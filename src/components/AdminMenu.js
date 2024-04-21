import React from "react"
import { Link } from "react-router-dom";

const AdminMenu = () => {
    return(
      <div className="adminMenu">
        <Link to="/admin/news">Новости</Link>
        <Link to="/admin/announcements">Анонсы</Link>
        <Link to="/admin/photos">Фото</Link>
        <Link to="/admin/vacancy">Вакансии</Link>
        <Link to="/admin/branche">Филиалы</Link>
      </div>
    )
  }

export default AdminMenu