import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com/users/" }),
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "",
        }),
        getUserById: builder.query({
            query: id => `${id}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
