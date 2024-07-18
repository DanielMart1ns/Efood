import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    checkoutFormIsOpen: false,
  },
  reducers: {
    openCheckoutForm: (state) => {
      state.checkoutFormIsOpen = true;
    },
    closeCheckoutForm: (state) => {
      state.checkoutFormIsOpen = false;
    },
  },
});

export const { openCheckoutForm, closeCheckoutForm } = checkoutSlice.actions;
export default checkoutSlice.reducer;
