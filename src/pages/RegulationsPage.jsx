import React, {
  Fragment,
  useMemo,
  useState,
} from "react";

import { Helmet } from "react-helmet-async";

import RegulationsHero from "../components/sections/regulations/RegulationsHero";
import RegulationsFilters from "../components/sections/regulations/RegulationsFilters";
import RegulationsVault from "../components/sections/regulations/RegulationsVault";
import EmptyState from "../components/sections/regulations/EmptyState";
import RegulationsCTA from "../components/sections/regulations/RegulationsCTA";

import CTA from "../components/CTA";

import {
  regulationsHeroData,
  regulationCategories,
  regulationFilters,
  regulationStats,
} from "../data/regulations";

export default function RegulationsPage() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filteredCategories = useMemo(() => {
    return regulationCategories
      .filter(
        (category) =>
          activeCategory === "all" ||
          category.id === activeCategory
      )
      .map((category) => ({
        ...category,

        items: category.items.filter(
          (item) =>
            item.title
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||
            item.tags.some((tag) =>
              tag
                .toLowerCase()
                .includes(
                  searchQuery.toLowerCase()
                )
            )
        ),
      }))
      .filter(
        (category) =>
          category.items.length > 0
      );
  }, [
    activeCategory,
    searchQuery,
  ]);

  return (
    <Fragment>
      <Helmet>
        <title>
          Regulations | Navi Promotions
        </title>

        <meta
          name="description"
          content="Explore official regulations, company policies, notices, circulars and governance documents of Navi Promotions."
        />
      </Helmet>

      <main className="bg-white overflow-hidden">
        {/* Hero */}
        <RegulationsHero
          badge={
            regulationsHeroData.badge
          }
          title={
            regulationsHeroData.title
          }
          description={
            regulationsHeroData.description
          }
          image={
            regulationsHeroData.image
          }
        />

        {/* Search + Filters */}
        <RegulationsFilters
          searchQuery={searchQuery}
          setSearchQuery={
            setSearchQuery
          }
          activeCategory={
            activeCategory
          }
          setActiveCategory={
            setActiveCategory
          }
          filters={regulationFilters}
        />

        {/* Documents */}
        {filteredCategories.length >
        0 ? (
          <RegulationsVault
            categories={
              filteredCategories
            }
          />
        ) : (
          <EmptyState
            setSearchQuery={
              setSearchQuery
            }
            setActiveCategory={
              setActiveCategory
            }
          />
        )}

        {/* Help Center CTA */}
        <RegulationsCTA
          stats={regulationStats}
        />

        {/* Global CTA */}
        <CTA />
      </main>
    </Fragment>
  );
}