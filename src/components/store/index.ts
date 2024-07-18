import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import checkoutFormReducer from './checkoutForm';
import api from '../../services/api';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutFormReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
