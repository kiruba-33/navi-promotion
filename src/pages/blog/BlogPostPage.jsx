import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CTA from "../../components/CTA";
import PostContent from "../../components/sections/blog/PostContent";
import { blogs } from "../../data/blogs";

export default function BlogPostPage() {
  const { id } = useParams();

  const post = blogs.find((item) => item.id === id);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 px-5">
        <div className="text-center bg-white border border-slate-200 rounded-[2rem] p-10 shadow-sm max-w-md">
          <h1 className="heading-display text-2xl sm:text-3xl heading-primary mb-3">
            Post Not Found
          </h1>
          <p className="body-large text-slate-600">
            The article you are looking for does not exist or has been removed.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Navi Promotions Blog</title>
        <meta
          name="description"
          content={post.excerpt || `${post.title} - Read the full analysis by Navi Promotions.`}
        />
      </Helmet>

      <main className="bg-slate-50 min-h-screen">
        {/* Main Post Content */}
        <PostContent post={post} />

        {/* Global CTA */}
        <CTA />
      </main>
    </>
  );
}