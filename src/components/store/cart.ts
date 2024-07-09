import { createSlice } from '@reduxjs/toolkit';
import { RestaurantAttributes } from '../../pages/Home';

type cartState = {
  items: RestaurantAttributes[];
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
  },
});

export const { open, close } = cartSlice.actions;
export default cartSlice.reducer;
