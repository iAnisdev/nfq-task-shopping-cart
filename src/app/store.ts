import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AuthReducer from '../features/Auth/AuthSlice'
import LoaderReducer from '../features/Loader/LoaderSlice';
export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        loader: LoaderReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;