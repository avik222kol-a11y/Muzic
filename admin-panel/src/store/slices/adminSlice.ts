import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdminState {
  adminUser: any;
  adminToken: string | null;
  isAdminAuthenticated: boolean;
  dashboardData: any;
  loading: boolean;
}

const initialState: AdminState = {
  adminUser: null,
  adminToken: localStorage.getItem('adminToken'),
  isAdminAuthenticated: !!localStorage.getItem('adminToken'),
  dashboardData: null,
  loading: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminAuth: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.adminUser = action.payload.user;
      state.adminToken = action.payload.token;
      state.isAdminAuthenticated = true;
      localStorage.setItem('adminToken', action.payload.token);
    },
    setDashboardData: (state, action: PayloadAction<any>) => {
      state.dashboardData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    logoutAdmin: (state) => {
      state.adminUser = null;
      state.adminToken = null;
      state.isAdminAuthenticated = false;
      localStorage.removeItem('adminToken');
    },
  },
});

export const { setAdminAuth, setDashboardData, setLoading, logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
