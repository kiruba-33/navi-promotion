import React, { useEffect, useRef } from "react";
import {
  X,
  Download,
  FileText,
  Calendar,
  Bookmark,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ExternalLink,
} from "lucide-react";

export default function DocumentPreviewModal({
  isOpen,
  document,
  categoryTitle,
  onClose,
}) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Keyboard accessibility: ESC key close & focus management
  useEffect(() => {
    if (!isOpen || !document) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock background scroll when modal is open
    const originalOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";

    // Focus close button on mount
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.document.body.style.overflow = originalOverflow || "unset";
    };
  }, [isOpen, document, onClose]);

  if (!isOpen || !document) return null;

  // Actual Download handler
  const handleDownload = () => {
    if (document.fileUrl) {
      // If a physical file asset exists, download directly
      const link = window.document.createElement("a");
      link.href = document.fileUrl;
      link.download =
        document.fileUrl.split("/").pop() || `${document.title}.pdf`;
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
    } else {
      // Download the actual official document record as formatted text
      const contentLines = [
        "================================================================================",
        "                       NAVI PROMOTIONS PRIVATE LIMITED                          ",
        "             GOVERNANCE, REGULATORY AFFAIRS & OPERATIONAL STANDARDS             ",
        "================================================================================",
        "",
        `DOCUMENT TITLE : ${document.title}`,
        `CATEGORY       : ${categoryTitle || "Official Regulations"}`,
        `EFFECTIVE DATE : ${document.date}`,
        `STATUS         : ${document.status}`,
        `RECORD SIZE    : ${document.size}`,
        `CLASSIFICATION : ${(document.tags || []).join(", ")}`,
        "",
        "--------------------------------------------------------------------------------",
        "SUMMARY & OBJECTIVE",
        "--------------------------------------------------------------------------------",
        document.summary ||
          "Official corporate policy and regulatory documentation published by Navi Promotions.",
        "",
        "--------------------------------------------------------------------------------",
        "DOCUMENT ARTICLES & PROVISIONS",
        "--------------------------------------------------------------------------------",
      ];

      if (document.sections && document.sections.length > 0) {
        document.sections.forEach((sec, idx) => {
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
        "VERIFIED     : Compliant with Corporate Governance Standards"
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
      const safeName = document.title
        .replace(/[^a-zA-Z0-9]/g, "_")
        .toLowerCase();
      link.download = `${safeName}.txt`;
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#102A56]/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="document-preview-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#0F172A]/10 overflow-hidden"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#FFFFFF] border-b border-[#0F172A]/10 px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-medium uppercase tracking-[0.04em] bg-[#F1F5F9] text-[#102A56] border border-[#102A56]/10">
                <Bookmark className="w-3 h-3 text-[#F97316]" />
                {categoryTitle || "Official Document"}
              </span>

              <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium uppercase tracking-[0.04em] bg-[#102A56] text-[#FFFFFF]">
                {document.status}
              </span>

              <span className="text-[12px] font-normal text-[#0F172A]/65 hidden sm:inline">
                · {document.size}
              </span>
            </div>

            <h2
              id="document-preview-title"
              className="text-[18px] sm:text-[22px] font-semibold text-[#0F172A] truncate"
            >
              {document.title}
            </h2>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[10px] bg-[#2563EB] text-[#FFFFFF] text-[13px] sm:text-[14px] font-medium hover:bg-[#102A56] transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label={`Download ${document.title}`}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download Document</span>
              <span className="sm:hidden">Download</span>
            </button>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 rounded-lg text-[#102A56]/70 bg-[#F1F5F9] hover:text-[#FFFFFF] hover:bg-[#102A56] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label="Close document preview modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8 lg:p-10 space-y-6 bg-[#F1F5F9]">
          {/* Formal Document Title Card */}
          <div className="bg-[#FFFFFF] rounded-2xl border border-[#0F172A]/10 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#0F172A]/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#F1F5F9] border border-[#102A56]/10 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#0F172A]/60">
                    Navi Promotions Pvt. Ltd.
                  </p>
                  <h3 className="heading-card text-[#0F172A]">
                    {document.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[12px] font-medium text-[#0F172A]/75 sm:text-right">
                <Calendar className="w-4 h-4 text-[#F97316]" />
                <span>Effective Date: {document.date}</span>
              </div>
            </div>

            {/* Document Metadata Badges */}
            <div className="pt-5 flex flex-wrap items-center gap-2.5 text-[12px]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F1F5F9] text-[#0F172A] font-medium">
                <span className="text-[#0F172A]/60 font-normal">Version/Size:</span>
                <span>{document.size}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F1F5F9] text-[#0F172A] font-medium">
                <span className="text-[#0F172A]/60 font-normal">Status:</span>
                <span className="text-[#2563EB]">
                  {document.status}
                </span>
              </div>

              {document.tags &&
                document.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-[#F1F5F9] text-[#102A56] border border-[#0F172A]/10 text-[11px] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
            </div>

            {/* Summary */}
            {document.summary && (
              <div className="mt-6 p-4 rounded-xl bg-[#F1F5F9] border border-[#102A56]/10">
                <p className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#2563EB] mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#F97316]" />
                  Policy Overview & Scope
                </p>
                <p className="body-normal text-[#0F172A]/85">
                  {document.summary}
                </p>
              </div>
            )}
          </div>

          {/* Formatted Document Articles / Provisions */}
          <div className="space-y-4">
            {document.sections && document.sections.length > 0 ? (
              document.sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] rounded-2xl border border-[#0F172A]/10 p-6 sm:p-7 shadow-xs"
                >
                  <div className="flex items-start gap-3.5 mb-2.5">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#102A56] text-[#FFFFFF] text-[12px] font-semibold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-[16px] sm:text-[18px] font-semibold text-[#0F172A]">
                      {sec.heading}
                    </h4>
                  </div>
                  <p className="body-normal text-[#0F172A]/80 pl-10.5 whitespace-pre-line">
                    {sec.content}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#0F172A]/10 p-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#2563EB] mx-auto mb-3" />
                <h4 className="heading-card text-[#0F172A] mb-2">
                  Official Record Verified
                </h4>
                <p className="body-normal text-[#0F172A]/75 max-w-lg mx-auto">
                  This document is maintained under active governance protocols.
                  All operational stipulations, compliance verifications, and
                  internal standards are in effect for Navi Promotions.
                </p>
              </div>
            )}
          </div>

          {/* Signatory & Governance Sign-off */}
          <div className="bg-[#FFFFFF] rounded-2xl border border-[#0F172A]/10 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#0F172A]/60">
                Governance Authority
              </p>
              <p className="text-[14px] font-semibold text-[#102A56] flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#F97316]" />
                Navi Promotions Executive Council
              </p>
              <p className="text-[12px] text-[#0F172A]/65">
                Theni, Tamil Nadu · Singapore Hub
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F1F5F9] border border-[#2563EB]/20 text-[#102A56] text-[12px] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
              <span>Verified & Active Record</span>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 z-20 bg-[#FFFFFF] border-t border-[#0F172A]/10 px-5 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4">
          <p className="text-[12px] text-[#0F172A]/65 truncate hidden sm:block">
            File reference: <span className="font-medium text-[#102A56]">{document.title}</span> ({document.size})
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-[10px] border border-[#0F172A]/15 text-[#102A56] text-[13px] sm:text-[14px] font-medium hover:bg-[#F1F5F9] transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[#2563EB] text-[#FFFFFF] text-[13px] sm:text-[14px] font-medium hover:bg-[#102A56] transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
