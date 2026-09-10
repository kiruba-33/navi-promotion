import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  useScroll,
  useTransform,
} from "framer-motion";

import BlogHero from "../../components/sections/blog/BlogHero";
import BlogSearch from "../../components/sections/blog/BlogSearch";
import BlogGrid from "../../components/sections/blog/BlogGrid";

import {
  blogs,
  blogCategories,
} from "../../data/blogs";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 300]
  );

  const opacityHero = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0]
  );

  const scaleImage = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.1]
  );

  const filteredPosts = blogs.filter(
    (post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category === activeCategory;

      const matchesSearch =
        post.title
          .toLowerCase()
          .includes(
            searchQuery.toLowerCase()
          ) ||
        post.excerpt
          .toLowerCase()
          .includes(
            searchQuery.toLowerCase()
          );

      return (
        matchesCategory &&
        matchesSearch
      );
    }
  );

  return (
    <>
      <Helmet>
        <title>
          Blog | Navi Promotions
        </title>

        <meta
          name="description"
          content="
            Latest digital marketing,
            branding and growth insights
            from Navi Promotions.
          "
        />
      </Helmet>

      <main
        className="
          bg-slate-50
          min-h-screen
        "
      >
        <BlogHero
          categories={blogCategories}
          activeCategory={
            activeCategory
          }
          setActiveCategory={
            setActiveCategory
          }
          containerRef={containerRef}
          yText={yText}
          opacityHero={opacityHero}
          scaleImage={scaleImage}
        />

        <BlogSearch
          searchQuery={
            searchQuery
          }
          setSearchQuery={
            setSearchQuery
          }
        />

        <section
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-6
            lg:px-8
            pb-20
            sm:pb-24
            lg:pb-32
          "
        >
          <BlogGrid
            posts={filteredPosts}
          />
        </section>
      </main>
    </>
  );
}