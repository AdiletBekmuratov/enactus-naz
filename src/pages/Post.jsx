import { handleDateVal } from "@/helpers/date";
import { useGetSinglePostQuery } from "@/redux/services/public.service";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import React from "react";
import { useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import UnstyledLink from "@/components/UnstyledLink";
import Litres from "@/ads/lith4.png";
import Technodom from "@/ads/technodom.jpg";

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder({ projectId: "7a4gcr9r", dataset: "production" })
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        display: isInline ? "inline-block" : "block",
        aspectRatio: width / height,
      }}
    />
  );
};

const myPortableTextComponents = {
  types: {
    image: SampleImageComponent,
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold md:text-5xl font-primary">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold md:text-4xl font-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold md:text-3xl font-primary">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold font-primary">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc list-outside ml-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal list-outside ml-5">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

const Post = () => {
  let params = useParams();
  const { slug } = params;
  const { data, isLoading, isError, error } = useGetSinglePostQuery(slug);

  if (isLoading) {
    return (
      <main className="flex flex-1 flex-col justify-center items-center">
        <Loader />
      </main>
    );
  }

  return (
    <main className="container mx-auto px-5 py-16 text-gray-600">
      <div className="flex flex-col space-y-6 items-start">
        <h2>{data?.result?.title}</h2>
        <div>
          <div className="flex space-x-2 items-center">
            <h4>Дата публикации:</h4>
            <p>
              {!!data?.result?.publishedAt
                ? handleDateVal(data?.result?.publishedAt)
                : "Не указан"}
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <h4>Автор:</h4>
            <p>{data?.result?.author?.name ?? "Не указано"}</p>
          </div>
          <div className="flex flex-wrap items-center">
            <h4>Категории:</h4>{" "}
            {data?.result?.categories.length > 0 ? (
              data?.result?.categories.map((category) => (
                <p
                  key={category._id}
                  className="rounded-full bg-customLightPink text-white lowercase text-xs py-1 px-2 ml-2"
                >
                  {category.title}
                </p>
              ))
            ) : (
              <p>Не указано</p>
            )}
          </div>
        </div>
        <img
          src={data?.result?.mainImage?.asset?.url}
          alt={data?.result?.mainImage?.asset?.url}
          className="h-96 aspect-video rounded object-cover"
        />
        <div className="w-full flex justify-start">
          <UnstyledLink
            href="https://www.litres.ru"
            className="hover:scale-105 transition-all"
          >
            <img src={Litres} alt="litres" className="object-contain h-40" />
          </UnstyledLink>
        </div>
      </div>
      <div className="flex flex-col items-start space-y-2 mt-8">
        <PortableText
          value={data?.result?.body}
          components={myPortableTextComponents}
        />
      </div>
      <div className="w-full flex justify-start mt-10">
        <UnstyledLink href="https://www.technodom.kz">
          <img
            src={Technodom}
            alt="Technodom"
            className="object-contain w-full"
          />
        </UnstyledLink>
      </div>
    </main>
  );
};

export default Post;
