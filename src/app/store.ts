import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../apis/auth.api';
import { labelsApi } from '../apis/labels.api';
import { usersApi } from '../apis/users.api';
import auth from '../slices/auth.slice';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [labelsApi.reducerPath]: labelsApi.reducer,
    auth
  },
  middleware: (getDefaultMiddeware) => 
    getDefaultMiddeware()
    .concat(usersApi.middleware)
    .concat(authApi.middleware)
    .concat(labelsApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
