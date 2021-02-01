import React from 'react';

import { AdminHeaderCont } from './admin-header.styles';

const AdminHeader = () => {
  return ( 
    <AdminHeaderCont>
      <button>Current database</button>
      <button>New Plant</button>
    </AdminHeaderCont>
  );
}
 
export default AdminHeader;