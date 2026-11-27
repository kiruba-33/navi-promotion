import React, { useState } from "react";
import {
  Bookmark,
  Calendar,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Filter,
} from "lucide-react";
import DocumentPreviewModal from "./DocumentPreviewModal";

export default function RegulationsVault({
  categories,
}) {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState("");

  const handleOpenPreview = (item, categoryTitle) => {
    setSelectedDoc(item);
    setSelectedCategoryTitle(categoryTitle);
  };

  const handleDirectDownload = (e, item, categoryTitle) => {
    e.stopPropagation();
    if (item.fileUrl) {
      const link = window.document.createElement("a");
      link.href = item.fileUrl;
      link.download = item.fileUrl.split("/").pop() || `${item.title}.pdf`;
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
    } else {
      const contentLines = [
        "================================================================================",
        "                       NAVI PROMOTIONS PRIVATE LIMITED                          ",
        "             GOVERNANCE, REGULATORY AFFAIRS & OPERATIONAL STANDARDS             ",
        "================================================================================",
        "",
        `DOCUMENT TITLE : ${item.title}`,
        `CATEGORY       : ${categoryTitle || "Official Regulations"}`,
        `EFFECTIVE DATE : ${item.date}`,
        `STATUS         : ${item.status}`,
        `RECORD SIZE    : ${item.size}`,
        `CLASSIFICATION : ${(item.tags || []).join(", ")}`,
        "",
        "--------------------------------------------------------------------------------",
        "SUMMARY & OBJECTIVE",
        "--------------------------------------------------------------------------------",
        item.summary ||
          "Official corporate policy and regulatory documentation published by Navi Promotions.",
        "",
        "--------------------------------------------------------------------------------",
        "DOCUMENT ARTICLES & PROVISIONS",
        "--------------------------------------------------------------------------------",
      ];

      if (item.sections && item.sections.length > 0) {
        item.sections.forEach((sec, idx) => {
          contentLines.push("");
          contentLines.push(`ARTICLE ${idx + 1}: ${sec.heading}`);
          contentLines.push(sec.content);
        });
      }

      contentLines.push("");
      contentLines.push(
        "--------------------------------------------------------------------------------"
      );
      contentLines.push(
        "AUTHORIZED BY: Navi Promotions Executive Governance Board"
      );
      contentLines.push(
        "LOCATIONS    : Theni, Tamil Nadu (HQ) · Singapore Global Operations"
      );
      contentLines.push(
        "================================================================================"
      );

      const blob = new Blob([contentLines.join("\n")], {
        type: "text/plain;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const link = window.document.createElement("a");
      link.href = url;
      const safeName = item.title.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
      link.download = `${safeName}.txt`;
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <section
      className="
        bg-[#F1F5F9]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div className="space-y-16 lg:space-y-20">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
              >
                {/* Header */}
                <div
                  className="
                    mb-10
                    flex
                    flex-col
                    gap-6
                    md:mb-12
                    md:flex-row
                    md:items-end
                    md:justify-between
                  "
                >
                  <div className="max-w-xl">
                    <div
                      className="
                        mb-5
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#102A56]/10
                          bg-[#FFFFFF]
                          shadow-xs
                        "
                      >
                        <Icon className="h-5 w-5 text-[#2563EB]" aria-hidden="true" />
                      </div>

                      <div
                        className="
                          h-px
                          flex-1
                          bg-[#0F172A]/10
                        "
                      />
                    </div>

                    <h2
                      className="
                        heading-section
                        mb-3
                        text-[#0F172A]
                      "
                    >
                      {category.title}
                    </h2>

                    <p
                      className="
                        text-[13px]
                        font-medium
                        uppercase
                        tracking-[0.06em]
                        text-[#0F172A]/65
                      "
                    >
                      {category.description}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2.5
                      text-[#0F172A]/70
                    "
                  >
                    <span
                      className="
                        text-[12px]
                        font-medium
                        uppercase
                        tracking-[0.04em]
                      "
                    >
                      {category.items.length} Documents
                    </span>

                    <Filter className="h-4 w-4 text-[#F97316]" aria-hidden="true" />
                  </div>
                </div>

                {/* Cards */}
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-3
                  "
                >
                  {category.items.map(
                    (item) => (
                      <div
                        key={item.id}
                        className="
                          group
                          relative
                          flex
                          flex-col
                          rounded-2xl
                          border
                          border-[#0F172A]/10
                          bg-[#FFFFFF]
                          p-6
                          sm:p-7
                          shadow-xs
                          transition-all
                          duration-300
                          hover:border-[#2563EB]/40
                          hover:shadow-md
                        "
                      >
                        {/* Top */}
                        <div className="mb-6">
                          <div
                            className="
                              mb-6
                              flex
                              items-center
                              justify-between
                            "
                          >
                            <div
                              className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#F1F5F9]
                                border border-[#102A56]/10
                                transition-colors
                                duration-200
                                group-hover:bg-[#2563EB]
                                group-hover:border-[#2563EB]
                              "
                            >
                              <Bookmark className="h-5 w-5 text-[#2563EB] group-hover:text-[#FFFFFF] transition-colors" />
                            </div>

                            <span
                              className="
                                rounded-lg
                                bg-[#102A56]
                                px-3
                                py-1
                                text-[11px]
                                font-medium
                                uppercase
                                tracking-[0.04em]
                                text-[#FFFFFF]
                              "
                            >
                              {item.status}
                            </span>
                          </div>

                          <h3
                            onClick={() => handleOpenPreview(item, category.title)}
                            className="
                              heading-card
                              mb-3.5
                              text-[#0F172A]
                              transition-colors
                              duration-200
                              group-hover:text-[#2563EB]
                              cursor-pointer
                            "
                          >
                            {item.title}
                          </h3>

                          <div
                            className="
                              mb-5
                              flex
                              flex-wrap
                              items-center
                              gap-3
                              text-[#0F172A]/65
                            "
                          >
                            <div
                              className="
                                flex
                                items-center
                                gap-1.5
                              "
                            >
                              <Calendar className="h-4 w-4 text-[#F97316]" aria-hidden="true" focusable="false" />

                              <span
                                className="
                                  text-[12px]
                                  font-medium
                                "
                              >
                                {item.date}
                              </span>
                            </div>

                            <div
                              className="
                                h-1
                                w-1
                                rounded-full
                                bg-[#0F172A]/25
                              "
                            />

                            <div
                              className="
                                flex
                                items-center
                                gap-1.5
                              "
                            >
                              <FileText className="h-4 w-4 text-[#2563EB]" aria-hidden="true" focusable="false" />

                              <span
                                className="
                                  text-[12px]
                                  font-medium
                                "
                              >
                                {item.size}
                              </span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div
                            className="
                              flex
                              flex-wrap
                              gap-2
                            "
                          >
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="
                                  rounded-lg
                                  border
                                  border-[#0F172A]/10
                                  bg-[#F1F5F9]
                                  px-2.5
                                  py-1
                                  text-[11px]
                                  font-medium
                                  text-[#0F172A]/75
                                "
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Footer */}
                        <div
                          className="
                            mt-auto
                            flex
                            items-center
                            justify-between
                            border-t
                            border-[#0F172A]/10
                            pt-5
                          "
                        >
                          <button
                            onClick={() => handleOpenPreview(item, category.title)}
                            className="
                              flex
                              items-center
                              gap-1.5
                              text-[13px]
                              font-medium
                              text-[#2563EB]
                              transition-colors
                              hover:text-[#102A56]
                              cursor-pointer
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-md
                            "
                            aria-label={`Preview ${item.title}`}
                          >
                            Preview Document

                            <ChevronRight className="h-4 w-4 text-[#F97316]" aria-hidden="true" focusable="false" />
                          </button>

                          <button
                            onClick={(e) => handleDirectDownload(e, item, category.title)}
                            aria-label={`Download ${item.title}`}
                            title={`Download ${item.title}`}
                            className="
                              group/dl
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#F1F5F9]
                              border border-[#0F172A]/10
                              opacity-100
                              lg:opacity-0
                              transition-all
                              duration-200
                              lg:group-hover:opacity-100
                              hover:bg-[#2563EB]
                              hover:border-[#2563EB]
                              focus:opacity-100
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-[#2563EB]
                              cursor-pointer
                            "
                          >
                            <Download className="h-4 w-4 text-[#102A56] transition-colors duration-200 group-hover/dl:text-[#FFFFFF]" />
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Document Preview Modal */}
      <DocumentPreviewModal
        isOpen={!!selectedDoc}
        document={selectedDoc}
        categoryTitle={selectedCategoryTitle}
        onClose={() => setSelectedDoc(null)}
      />
    </section>
  );
}