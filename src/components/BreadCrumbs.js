import React from 'react';
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths }) => {
  return (
    <div className='breadCrumb'>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <Link to={path.url}>{path.label}</Link>
          {index < paths.length - 1 && <img src='/img/separator.png' className='breadCrumbsSeparator' alt='separator' />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;