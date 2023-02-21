import apiSlice from "../api/apiSlice";



const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllJournal : builder.query({
            query: () => ({
                method: 'GET',
                url: `?query=${encodeURIComponent('*[_type == "post"]{author->{name, bio}, body, _id, _createdAt,mainImage,categories,slug,title }')}`,
            })
        }),
        getSinglePost: builder.query({
            query: (slug) => ({
                method: 'GET',
                url: `?query=${encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"][0]`)}`
            })
        })

    })
})

export const { useGetAllJournalQuery } = authApi;