import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', //default change if its different
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }), //json server on local host 3500
    endpoints: (builder) => ({
        getTodos: (builder) => ({
            query: () => '/todos', //  http get method /todos
        })
    })
})

//custom hooks always starts with use and ends with Query 

export const {
    useGetTodosQuery
} = apiSlice