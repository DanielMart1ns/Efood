import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootReducer } from '.';

interface itemsCart {
  name: string;
  price: number;
  picture: string;
  id: number;
}

type cartState = {
  items: itemsCart[];
  isOpen: boolean;
};

const initialState: cartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    addItem: (state, action: PayloadAction<itemsCart>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (!item) {
        state.items.push(action.payload);
      } else {
        alert('item já adicionado');
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { open, close, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
