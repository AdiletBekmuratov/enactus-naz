import { useGetLatestPostsQuery } from "@/redux/services/public.service";
import React from "react";
import UnstyledLink from "../UnstyledLink";
import PostCard from "../PostCard";
import { AiFillEye } from "react-icons/ai";
import Loader from "../Loader";

const LatestPosts = () => {
  const { data = [], isLoading, isError, error } = useGetLatestPostsQuery();

  return (
    <section className="text-gray-600 ">
      <div className="container px-5 py-24 mx-auto grid grid-cols-1 gap-6">
        <h2>
          Последние публикации
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <div className="flex justify-center items-center">
          <UnstyledLink
            href="/posts"
            className="flex justify-between items-center mx-auto lg:mx-0 bg-customLightPink text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <AiFillEye className="mr-2" /> Показать все
          </UnstyledLink>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
