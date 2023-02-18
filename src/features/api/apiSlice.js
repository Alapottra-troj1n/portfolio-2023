import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://${import.meta.env.VITE_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${import.meta.env.VITE_DATASET}`
    }),
    endpoints: (builder) => ({

    })
})

export default apiSlice;