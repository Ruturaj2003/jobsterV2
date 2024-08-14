import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkApi) => {
    try {
      console.log(thunkApi.getState().user.user.token);
      const resp = await customFetch.patch('/auth/updateUser', user, {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });
      console.log(thunkApi.getState().user.user.token);

      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkApi.dispatch(logoutUser());
        return thunkApi.rejectWithValue('Unauthorized Logging you out..');
      }
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkApi) => {
    try {
      const resp = await customFetch.post('/auth/register', user);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkApi) => {
    try {
      const resp = await customFetch.post('/auth/login', user);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success('Details Updated Successfully');
      });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
