import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/news",
    element: <NewsPage />
  },
  {
    path: "/news/:id",
    element: <OneNewPage />
  },
  {
    path: "/announcements",
    element: <AnnouncementsPage />,
  },
  {
    path: '/guide',
    element: <GuidePage />,
  },
  {
    path: '/directors',
    element: <DirectorsPage/>
  },
  {
    path: '/gallery',
    element: <GalleryPage/>
  },
  {
    path: '/about',
    element: <AboutPage /> 
  },
  {
    path: '/history',
    element: <HistoryPage/>
  },
  {
    path: "/contacts",
    element: <ContactsPage/>
  },
  {
    path: '/admin',
    children: [
      {
        path: '/admin/login',
        element: <AdminAutorizationPage />
      },
      {
        path: '/admin/:id',
        element: <AdminPage />
      },
    ]
  },
  {
    path: '/ershov',
    element: <ErshovPage />
  },
  {
    path: '/balakovo',
    element: <BalakovoPage />
  },
  {
    path: '/penza',
    element: <PenzaPage />
  },
  {
    path: '/kalininsk',
    element: <KalininskPage />
  },
  {
    path: '/uliyanovsk',
    element: <UliyanovskPage />
  },
  {
    path: '/privolg',
    element: <PrivolgPage />
  },
  {
    path: '/engels',
    element: <EngelsPage />
  },
  {
    path: '/saratov',
    element: <SaratovPage />
  },
  {
    path: '/partia',
    element: <PartiaPage />
  },
  {
    path: '/mordva',
    element: <MordvaPage />
  },
  {
    path: '/samara',
    element: <SamaraPage />
  },
  {
    path: '/persons',
    element: <PersonPage />
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
