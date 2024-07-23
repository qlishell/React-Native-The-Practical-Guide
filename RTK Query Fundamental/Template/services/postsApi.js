import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com/posts/" }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => "",
        }),
        getPostById: builder.query({
            query: id => `${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
