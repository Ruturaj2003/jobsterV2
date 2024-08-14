import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';

import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const createJob = createAsyncThunk(
  'job/createJob',
  async (job, thunkApi) => {
    try {
      const resp = await customFetch.post('/jobs', job, {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });
      thunkApi.dispatch(clearValues());
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

const jobSlice = createSlice({
  name: 'job',
  initialState: initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success('Job Created');
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default jobSlice.reducer;
export const { handleChange, clearValues } = jobSlice.actions;
