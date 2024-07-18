import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type cartState = {
  items: itemsCart[];
  cartIsOpen: boolean;
};

const initialState: cartState = {
  items: [],
  cartIsOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartIsOpen = true;
    },
    closeCart: (state) => {
      state.cartIsOpen = false;
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

export const { openCart, closeCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
