import React from 'react';
import { useParams } from 'react-router-dom';

const AdminPage = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Admin Page with ID: {id}</p>
    </div>
  );
};

export default AdminPage;