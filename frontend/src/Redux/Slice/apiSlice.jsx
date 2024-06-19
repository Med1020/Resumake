import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    addResumeContent: builder.mutation({
      query: (resumeData) => ({
        url: "/api/resumeContent",
        method: "POST",
        body: { resumeData },
      }),
    }),
  }),
});

export const { useAddResumeContentMutation } = apiSlice;
