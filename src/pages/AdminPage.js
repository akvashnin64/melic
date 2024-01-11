import {React , useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Route, Routes, Outlet } from "react-router-dom";
import AdminNewsSection from '../components/AdminNewsSection';
import AdminAnonsSection from '../components/AdminAnonsSection';
import AdminPhotoSection from '../components/AdminPhotoSection';
import AdminVideoSection from '../components/AdminVideoSection';

const AdminMenu = () => {
  return(
    <div className="adminMenu">
      <Link to="/admin/news">Новости</Link>
      <Link to="/admin/announcements">Анонсы</Link>
      <Link to="/admin/photos">Фото</Link>
      <Link to="/admin/videos">Видео</Link>
    </div>
  )
}

const AdminPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Прокрутить в верхнюю часть страницы при изменении маршрута
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="adminContainer">
      <AdminMenu />
      <div className="adminContent">
        <Routes>
          <Route path="/admin/news" element={<AdminNewsSection />} />
          <Route path="/admin/announcements" element={<AdminAnonsSection />} />
          <Route path="/admin/photos" element={<AdminPhotoSection />} />
          <Route path="/admin/videos" element={<AdminVideoSection />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;