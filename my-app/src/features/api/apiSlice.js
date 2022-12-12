import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', //default change if its different
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }), //json server on local host 3500
    endpoints: (builder) => ({
        getTodos: builder.query ({
            query: () => '/todos', //  http get method /todos
        }),
        addTodo: builder.mutation ({ //mutation method we change the data
            query: (todo) => ({ //todo pass in cause means new todo
                url: '/todos',
                method: 'POST',
                body: todo //for the body in that request we pass the new todo
            })
        }),
        updateTodo: builder.mutation ({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PATCH',
                body: todo
            })
        }),
        deleteTodo: builder.mutation ({
            query: ({ id }) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
                body: id
            })
        })
    })
})

//custom hooks always starts with use and ends with Query or Mutation 

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = apiSlice