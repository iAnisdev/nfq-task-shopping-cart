import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AuthReducer from '../features/Auth/AuthSlice'
import LoaderReducer from '../features/Loader/LoaderSlice';
import AppbarReducer from '../features/Appbar/AppbarSlice';
import ProductReducer from '../features/Products/ProductSlice';
import SearchReducer from '../features/Search/SearchSlice';
import DrawerReducer from '../features/Drawer/DrawerSlice';
import CartReducer from '../features/Cart/CartSlice';

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        loader: LoaderReducer,
        app: AppbarReducer,
        product: ProductReducer,
        search: SearchReducer,
        drawer: DrawerReducer,
        cart: CartReducer
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