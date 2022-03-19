import { API_URL } from "@/redux/http";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const LATEST_POSTS =
  "https://7a4gcr9r.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22post%22%5D%5B0..7%5D%7B%0A%20%20%20%20_id%2C%20%0A%20%20%20%20title%2C%0A%20%20%20%20description%2C%0A%20%20publishedAt%2C%0A%20%20slug%7B%0Acurrent%0A%7D%2C%0A%20%20categories%5B%5D%20-%3E%20%7B_id%2Ctitle%7D%2C%0A%20%20%20%20mainImage%7B%0A%20%20%20%20%20%20asset%20-%3E%20%7Burl%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20author%20-%3E%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%7D%20%7C%20order(publishedAt%20desc)";
const ALL_POSTS =
  "https://7a4gcr9r.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22post%22%5D%7B%0A%20%20%20%20_id%2C%20%0A%20%20%20%20title%2C%0A%20%20%20%20description%2C%0A%20%20publishedAt%2C%0A%20%20slug%7B%0Acurrent%0A%7D%2C%0A%20%20categories%5B%5D%20-%3E%20%7B_id%2Ctitle%7D%2C%0A%20%20%20%20mainImage%7B%0A%20%20%20%20%20%20asset%20-%3E%20%7Burl%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20author%20-%3E%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%7D%20%7C%20order(publishedAt%20desc)";

export const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({}),
  tagTypes: [],
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query(body) {
        return {
          url: `https://www.actionforms.io/e/r/adlet-bekmuratov-test`,
          method: "POST",
          body,
        };
      },
    }),
    getLatestPosts: builder.query({
      query() {
        return {
          url: LATEST_POSTS,
        };
      },
    }),
    getAllPosts: builder.query({
      query() {
        return {
          url: ALL_POSTS,
        };
      },
    }),
  }),
});

export const {
  useContactUsMutation,
  useGetLatestPostsQuery,
  useGetAllPostsQuery,
} = publicApi;
