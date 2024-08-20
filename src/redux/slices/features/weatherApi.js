import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = import.meta.env.VITE_WEATHER_API_URL;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (builder) => ({
    getGeoCoordinates: builder.query({
      query: (searchedData) => `?q=${searchedData}&APPID=${apiKey}`,
    }),
  }),
});

export const { useGetGeoCoordinatesQuery } = weatherApi;
