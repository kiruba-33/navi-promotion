import React from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({
  posts = [],
}) {
  return (
    <section className="py-8 sm:py-10 lg:py-12">

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          lg:gap-10
        "
      >

        {posts.map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}