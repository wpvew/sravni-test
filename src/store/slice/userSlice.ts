import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue } from '@reduxjs/toolkit';
import ApiServer from '../../API/ApiServer';

export type TUserData = Record<'name' | 'username' | 'phone' | 'email' | 'id', string> &
  Record<'company', TCompanyData>;

export type TCompanyData = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type TUserState = {
  isLoading: boolean;
  error: string;
  data: TUserData;
};

const emptyUserData: TUserData = {
  name: '',
  phone: '',
  email: '',
  username: '',
  id: '',
  company: {
    name: '',
    bs: '',
    catchPhrase: '',
  },
};

const initialState: TUserState = {
  isLoading: false,
  error: '',
  data: emptyUserData,
};

export const fetchUser = createAsyncThunk<TUserData, string, { rejectValue: string }>(
  'user/fetchUser',
  async (userId, { rejectWithValue }): Promise<TUserData> => {
    try {
      const response: TUserData = await ApiServer.getUser(userId).then(({ data }) => data);
      if (!response) throw rejectWithValue('Нет данных');
      return response;
    } catch {
      throw rejectWithValue('Пользователь не существует');
    }
  }
);

const userListSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(isPending(fetchUser), (state) => {
        state.error = '';
        state.isLoading = true;
        state.data = emptyUserData;
      })
      .addMatcher(isFulfilled(fetchUser), (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addMatcher(isRejectedWithValue(fetchUser), (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
      });
  },
});

export default userListSlice.reducer;
