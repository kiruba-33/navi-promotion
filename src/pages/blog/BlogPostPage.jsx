import React from "react";
import { useParams } from "react-router-dom";

import CTA from "../../components/CTA";

import PostContent from "../../components/sections/blog/PostContent";

import { blogs } from "../../data/blogs";

export default function BlogPostPage() {
  const { id } = useParams();

  const post = blogs.find(
    (item) => item.id === id
  );

  if (!post) {
    return (
      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-slate-50
          px-5
        "
      >
        <div
          className="
            text-center
            bg-white
            border
            border-slate-200
            rounded-[2rem]
            p-10
            shadow-sm
          "
        >
          <h1
            className="
              heading-display
              text-3xl
              sm:text-4xl
              heading-primary
              mb-4

              sm:leading-[1.1]
              md:leading-[1.15]
              lg:leading-[1.15]
            "
          >
            Post Not Found
          </h1>

          <p
            className="
              body-large
              text-slate-600
            "
          >
            The article you are looking for
            does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <main
        className="
          bg-slate-50
          min-h-screen
        "
      >

        {/* CONTENT */}

        <PostContent
          post={post}
        />

        {/* CTA */}

        <CTA />
      </main>
    </>
  );
}