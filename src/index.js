import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import './styles/DirectorStyles.css'
import './styles/HistoryStyles.css'
import './styles/AboutStyles.css'
import './styles/AdminStyles.css'
import './styles/GalleryStyles.css'
import './styles/GuideStyles.css'
import './styles/ContactsStyles.css'
import './styles/ErshovStyles.css'
import './styles/NewsStyles.css'
import './styles/PersonStyles.css'
import './styles/VacancyStyles.css'
import ErrorPage from './components/ErrorPage';
import App from './components/App';
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import GuidePage from './pages/GuidePage'
import DirectorsPage from './pages/DirectorsPage';
import reportWebVitals from './reportWebVitals';
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage';
import HistoryPage from './pages/HistoryPage';
import ContactsPage from './pages/ContactsPage';
import AdminAutorizationPage from './pages/AdminAutorizationPage';
import AdminPage from './pages/AdminPage';
import ErshovPage from "./pages/ErshovPage"
import BalakovoPage from './pages/BalakovoPage';
import PenzaPage from './pages/PenzaPage';
import KalininskPage from './pages/KalininskPage';
import UliyanovskPage from './pages/UliyanovskPage';
import PrivolgPage from './pages/PrivolgPage';
import EngelsPage from './pages/EngelsPage';
import SaratovPage from './pages/SaratovPage';
import PartiaPage from './pages/PartiaPage';
import MordvaPage from './pages/MordvaPage';
import SamaraPage from './pages/SamaraPage';
import AnnouncementsPage from './pages/AnnouncementsPage'
import PersonPage from './pages/PersonPage';
import OneNewPage from './pages/OneNewPage';
import AdminNewsSection from './components/AdminNewsSection';
import AdminAnonsSection from './components/AdminAnonsSection';
import AdminPhotoSection from './components/AdminPhotoSection';
import AdminVideoSection from './components/AdminVideoSection';
import PrivateRoute from './components/PrivateRoute';
import ActsPage from './pages/ActsPage';
import VacancyPage from './pages/VacancyPage';

const router = createBrowserRouter([
  {
    path: process.env.PUBLIC_URL + "/",
    element: <HomePage />
  },
  {
    path: process.env.PUBLIC_URL + "/news",
    element: <NewsPage />
  },
  {
    path: process.env.PUBLIC_URL + "/news/:id",
    element: <OneNewPage />
  },
  //{
  //  path: process.env.PUBLIC_URL + "/announcements",
  //  element: <AnnouncementsPage />,
  //},
  {
    path: process.env.PUBLIC_URL + '/guide',
    element: <GuidePage />,
  },
  {
    path: process.env.PUBLIC_URL + '/gallery',
    element: <GalleryPage/>
  },
  {
    path: process.env.PUBLIC_URL + '/about',
    element: <AboutPage />
  },
  {
    path: process.env.PUBLIC_URL + '/about/history',
    element: <HistoryPage />
  },
  {
    path: process.env.PUBLIC_URL + '/about/directors',
    element: <DirectorsPage />
  },
  {
    path: process.env.PUBLIC_URL + '/about/persons',
    element: <PersonPage />
  },
  {
    path: process.env.PUBLIC_URL + '/about/acts',
    element: <ActsPage />
  },
  {
    path: process.env.PUBLIC_URL + "/contacts",
    element: <ContactsPage/>
  },
  {
    path: process.env.PUBLIC_URL + "/vacancy",
    element: <VacancyPage/>
  },
  {
    path: process.env.PUBLIC_URL + '/admin',
    children: [
      {
        path: process.env.PUBLIC_URL + "/admin/login",
        element: <AdminAutorizationPage />
      },
      {
        path: process.env.PUBLIC_URL + "/admin",
        element: <PrivateRoute element={AdminPage}/>
      },
      {
        path: process.env.PUBLIC_URL + '/admin/news',
        element: <PrivateRoute element={AdminNewsSection}/>
      },
      {
        path: process.env.PUBLIC_URL + '/admin/announcements',
        element: <PrivateRoute element={AdminAnonsSection}/>
      },
      {
        path: process.env.PUBLIC_URL + '/admin/photos',
        element: <PrivateRoute element={AdminPhotoSection}/>
      },
      {
        path: process.env.PUBLIC_URL + '/admin/videos',
        element: <PrivateRoute element={AdminVideoSection}/>
      },
    ]
  },
  {
    path: process.env.PUBLIC_URL + '/ershov',
    element: <ErshovPage />
  },
  {
    path: process.env.PUBLIC_URL + '/balakovo',
    element: <BalakovoPage />
  },
  {
    path: process.env.PUBLIC_URL + '/penza',
    element: <PenzaPage />
  },
  {
    path: process.env.PUBLIC_URL + '/kalininsk',
    element: <KalininskPage />
  },
  {
    path: process.env.PUBLIC_URL + '/uliyanovsk',
    element: <UliyanovskPage />
  },
  {
    path: process.env.PUBLIC_URL + '/privolg',
    element: <PrivolgPage />
  },
  {
    path: process.env.PUBLIC_URL + '/engels',
    element: <EngelsPage />
  },
  {
    path: process.env.PUBLIC_URL + '/saratov',
    element: <SaratovPage />
  },
  {
    path: process.env.PUBLIC_URL + '/partia',
    element: <PartiaPage />
  },
  {
    path: process.env.PUBLIC_URL + '/mordva',
    element: <MordvaPage />
  },
  {
    path: process.env.PUBLIC_URL + '/samara',
    element: <SamaraPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
