import React from 'react';
import { Link } from 'react-router-dom'

import { AdminHeaderCont } from './admin-header.styles';

const AdminHeader = () => {
  return ( 
    <AdminHeaderCont>
      <Link to='/admin'>Current database</Link>
      <Link to='/admin/new'>New Plant</Link>
    </AdminHeaderCont>
  );
}

export default AdminHeader;