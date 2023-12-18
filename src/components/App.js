import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Routes from './Routes';
import MainRouter from './Routes';

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;