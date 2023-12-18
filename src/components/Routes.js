import React from 'react';
import { Routes ,Route, Router } from 'react-router-dom';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element='./src/pages/HomePage'/>
        <Route path="/news" element='./src/pages/NewsPage'/>
      </Routes>
    </Router>
  );
};

export default MainRouter;