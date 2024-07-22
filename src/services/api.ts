import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type PurchaseResponse = {
  orderId: string;
};

type Products = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Products[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: number;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantAttributes[], void>({
      query: () => 'restaurantes',
    }),
    getDishes: builder.query<RestaurantAttributes, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesQuery,
  usePurchaseMutation,
} = api;
export default api;
