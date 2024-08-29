import axios from 'axios';
import { clearStore } from '../features/user/userSlice';

const customFetch = axios.create({
  baseURL: 'https://redux-toolkit-jobster-api-server.onrender.com/api/v1',
});

export default customFetch;

export const authHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export const checkForUnauthorizedResponse = (error, thunkApi) => {
  if (error.response.status === 401) {
    thunkApi.dispatch(clearStore);
    return thunkApi.rejectWithValue('Unauthorized! Logging Out');
  }
  return thunkApi.rejectWithValue(error.response.data.msg);
};
