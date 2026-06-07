import React from 'react';
import { Box } from '@mui/material';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

interface AdminLayoutProps {
  children: React.ReactNode;
  setIsAdminLoggedIn: (value: boolean) => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  setIsAdminLoggedIn,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AdminSidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <AdminHeader setIsAdminLoggedIn={setIsAdminLoggedIn} />
        <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5', overflow: 'auto' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
