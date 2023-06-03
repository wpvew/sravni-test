import { configureStore } from '@reduxjs/toolkit';
import userListSliceReducer from './slice/userListSlice';
import photoListSliceReducer from './slice/photoListSlice';
import userSliceReducer from './slice/userSlice';

const store = configureStore({
  reducer: {
    userListSliceReducer,
    photoListSliceReducer,
    userSliceReducer,
  },
});

export default store;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
