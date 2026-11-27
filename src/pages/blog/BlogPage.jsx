import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import BlogHero from "../../components/sections/blog/BlogHero";
import BlogSearch from "../../components/sections/blog/BlogSearch";
import BlogGrid from "../../components/sections/blog/BlogGrid";
import { useHeroScrollAnimation } from "../../hooks/useHeroScrollAnimation";

import {
  blogs,
  blogCategories,
} from "../../data/blogs";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const { containerRef, yText, opacityHero, scaleImage } = useHeroScrollAnimation();

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
          bg-white
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