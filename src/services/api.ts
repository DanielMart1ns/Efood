import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RestaurantAttributes } from '../pages/Home';
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (buider) => ({
    getRestaurants: buider.query<RestaurantAttributes[], void>({
      query: () => 'restaurantes',
    }),
    getDishes: buider.query<RestaurantAttributes, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetDishesQuery } = api;
export default api;
