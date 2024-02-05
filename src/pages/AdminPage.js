import {React , useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import AdminMenu from "../components/AdminMenu";

const AdminPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Прокрутить в верхнюю часть страницы при изменении маршрута
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="adminContainer">
      <AdminMenu />
    </div>
  );
};

export default AdminPage;