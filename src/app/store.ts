import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import AuthReducer from '../features/Auth/AuthSlice'
import LoaderReducer from '../features/Loader/LoaderSlice';
import AppbarReducer from '../features/Appbar/AppbarSlice';
import ProductReducer from '../features/Products/ProductSlice';
import SearchReducer from '../features/Search/SearchSlice';
import DrawerReducer from '../features/Drawer/DrawerSlice';
import CartReducer from '../features/Cart/CartSlice';
import PaymentReducer from '../features/Payment/PaymentSlice';


const persistConfig = {
  key: 'nfq-shopping-cart',
  storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  auth: AuthReducer,
  loader: LoaderReducer,
  app: AppbarReducer,
  product: ProductReducer,
  search: SearchReducer,
  drawer: DrawerReducer,
  cart: CartReducer,
  payment: PaymentReducer
}))

export const store = configureStore({
  reducer: persistedReducer
});


export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;