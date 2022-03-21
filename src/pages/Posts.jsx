import Loader from "@/components/Loader";
import PostCard from "@/components/PostCard";
import { useGetAllPostsQuery } from "@/redux/services/public.service";
import React from "react";

const Posts = () => {
  const { data = [], isLoading, isError, error } = useGetAllPostsQuery();

  return (
    <>
      <section className="text-gray-600">
        <div className="container px-5 py-16 mx-auto grid grid-cols-1 gap-6">
          <h2 className="text-gray-900">
            Публикации
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {isLoading ? (
              <Loader />
            ) : (
              data.result.map((post) => (
                <PostCard
                  key={post?._id}
                  title={post?.title}
                  imageURL={post?.mainImage?.asset?.url}
                  categories={post?.categories}
                  author={post?.author?.name}
                  published={post?.publishedAt}
                  slug={post?.slug?.current}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
