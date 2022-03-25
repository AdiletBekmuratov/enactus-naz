import { handleDateVal } from "@/helpers/date";
import React from "react";
import UnstyledLink from "./UnstyledLink";

const PostCard = ({ title, imageURL, categories, author, published, slug }) => {
  return (
    <div className="p-5 bg-white shadow-md rounded flex flex-col justify-between space-y-4">
      <div className="flex flex-col space-y-4">
        <UnstyledLink href={`/posts/${slug}`}>
          <img
            src={imageURL}
            alt={imageURL}
            className="object-cover w-full rounded aspect-video"
          />
        </UnstyledLink>
        <h4>{title}</h4>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap items-center lowercase text-white text-xs">
          {categories &&
            categories.map((category) => (
              <p
                key={category._id}
                className="rounded-full bg-customLightPink py-1 px-2"
              >
                {category.title}
              </p>
            ))}
        </div>
        <div className="flex flex-col space-y-2 justify-start flex-wrap items-start">
          <p>
            Дата публикации:{" "}
            {!!published ? handleDateVal(published) : "Не указан"}
          </p>
          <p>Автор: {author ?? "Не указан"}</p>
        </div>
        <div className="w-full text-right">
          <UnstyledLink href={`/posts/${slug}`} className="hover:underline">
            Читать
          </UnstyledLink>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
