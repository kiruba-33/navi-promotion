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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="document-preview-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white border-b border-slate-200 px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-orange-600 border border-orange-200/60">
                <Bookmark className="w-3 h-3 text-orange-500" />
                {categoryTitle || "Official Document"}
              </span>

              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white">
                {document.status}
              </span>

              <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
                · {document.size}
              </span>
            </div>

            <h2
              id="document-preview-title"
              className="text-lg sm:text-2xl font-bold text-slate-900 truncate"
            >
              {document.title}
            </h2>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-orange-500 text-white text-xs sm:text-sm font-semibold hover:bg-orange-600 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              aria-label={`Download ${document.title}`}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download Document</span>
              <span className="sm:hidden">Download</span>
            </button>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Close document preview modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 bg-slate-50/50">
          {/* Formal Document Title Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Navi Promotions Pvt. Ltd.
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {document.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 sm:text-right">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span>Effective Date: {document.date}</span>
              </div>
            </div>

            {/* Document Metadata Badges */}
            <div className="pt-5 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                <span className="text-slate-400 font-normal">Version/Size:</span>
                <span className="font-semibold">{document.size}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                <span className="text-slate-400 font-normal">Status:</span>
                <span className="font-semibold text-orange-600">
                  {document.status}
                </span>
              </div>

              {document.tags &&
                document.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-orange-50 text-orange-700 border border-orange-200/50 text-[11px] font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
            </div>

            {/* Summary */}
            {document.summary && (
              <div className="mt-6 p-4.5 rounded-xl bg-orange-50/40 border border-orange-100">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  Policy Overview & Scope
                </p>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {document.summary}
                </p>
              </div>
            )}
          </div>

          {/* Formatted Document Articles / Provisions */}
          <div className="space-y-6">
            {document.sections && document.sections.length > 0 ? (
              document.sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {sec.heading}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-10.5 font-normal whitespace-pre-line">
                    {sec.content}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Official Record Verified
                </h4>
                <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  This document is maintained under active governance protocols.
                  All operational stipulations, compliance verifications, and
                  internal standards are in effect for Navi Promotions.
                </p>
              </div>
            )}
          </div>

          {/* Signatory & Governance Sign-off */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Governance Authority
              </p>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-orange-500" />
                Navi Promotions Executive Council
              </p>
              <p className="text-xs text-slate-500">
                Theni, Tamil Nadu · Singapore Hub
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Verified & Active Record</span>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 z-20 bg-white border-t border-slate-200 px-5 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500 truncate hidden sm:block">
            File reference: <span className="font-semibold text-slate-700">{document.title}</span> ({document.size})
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 active:scale-95 transition-all"
            >
              Close
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-xs sm:text-sm font-semibold hover:bg-orange-600 active:scale-95 transition-all shadow-sm"
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
