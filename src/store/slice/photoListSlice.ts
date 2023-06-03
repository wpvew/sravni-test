import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue } from '@reduxjs/toolkit';
import ApiServer from '../../API/ApiServer';

export type TPhoto = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
};
export type TPhotoList = Array<TPhoto>;

type TPhotosState = {
  isLoading: boolean;
  error: string;
  data: Array<TPhotoList>;
};

const initialState: TPhotosState = {
  isLoading: false,
  error: '',
  data: [],
};

export const fetchPhotoList = createAsyncThunk<Array<TPhotoList>, { userId: string }, { rejectValue: string }>(
  'photos/fetchPhotoList',
  async ({ userId }, { rejectWithValue }) => {
    if (!userId) throw rejectWithValue('Нет данных');
    const albumIdList = await ApiServer.getAlbumIdList(userId);
    if (!albumIdList.length) throw rejectWithValue('Нет данных');

    const response = await ApiServer.getPhotos(albumIdList).then(({ data }) => {
      const arr = [];
      const limit = 10;
      while (data.length > 0) {
        arr.push(data.slice(0, limit));
        data.splice(0, limit);
      }
      return arr;
    });
    return response;
  }
);

const photoListSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    clearPhotoList(state) {
      state.data = [];
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(isPending(fetchPhotoList), (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addMatcher(isFulfilled(fetchPhotoList), (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addMatcher(isRejectedWithValue(fetchPhotoList), (state, action) => {
        state.isLoading = false;
        if (action.payload) state.error = action.payload;
      });
  },
});

export const { clearPhotoList } = photoListSlice.actions;

export default photoListSlice.reducer;
