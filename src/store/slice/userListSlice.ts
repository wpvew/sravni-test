import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue } from '@reduxjs/toolkit';
import ApiServer from '../../API/ApiServer';
import { TUserData } from './userSlice';

export type TUserList = Array<TUserData>;

type TUserState = {
  isLoading: boolean;
  error: string;
  data: TUserList;
};

const initialState: TUserState = {
  isLoading: false,
  error: '',
  data: [],
};

export const fetchUserList = createAsyncThunk<TUserList, void, { rejectValue: string }>(
  'userList/fetchUserList',
  async (_, { rejectWithValue }): Promise<TUserList> => {
    const response: TUserList = await ApiServer.getUserList().then(({ data }) => data);
    if (!response.length) throw rejectWithValue('Нет данных');
    return response;
  }
);

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(isPending(fetchUserList), (state) => {
        state.error = '';
        state.isLoading = true;
        state.data = [];
      })
      .addMatcher(isFulfilled(fetchUserList), (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addMatcher(isRejectedWithValue(fetchUserList), (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
      });
  },
});

export default userListSlice.reducer;
