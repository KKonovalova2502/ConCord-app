import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AuthResponse, RefreshResponse, UserLoginValues, UserRegistrationValues } from '../../types/Auth';
import type { AuthState } from './slice';


axios.defaults.baseURL = 'https://connections-api.goit.global/';
const setAuthHeader = (value:string) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk('auth/register', async (values: UserRegistrationValues) => {
  const res = await axios.post('/users/signup', values);
  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const login = createAsyncThunk('auth/login', async (values:UserLoginValues) => {
  const res = await axios.post<AuthResponse>('/users/login', values);
  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
  setAuthHeader('');
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const reduxState = thunkApi.getState() as {auth: AuthState};
    setAuthHeader(`Bearer ${reduxState.auth.token}`);

    const res = await axios.get<RefreshResponse>('/users/current');
    return res.data;
  },
  {
    condition: (_, thunkApi) => {
      const reduxState = thunkApi.getState() as  {auth: AuthState};
      return reduxState.auth.token !== null;
    },
  },
);
