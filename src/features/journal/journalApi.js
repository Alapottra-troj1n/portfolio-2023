import apiSlice from "../api/apiSlice";



const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllJournal : builder.query({
            query: () => ({
                method: 'GET',
                url: `?query=${encodeURIComponent('*[_type == "post"]{author->{name, bio}, body, _id, _createdAt,mainImage,categories,slug,title }')}`,
            })
        })

    })
})

export const { useGetAllJournalQuery } = authApi;