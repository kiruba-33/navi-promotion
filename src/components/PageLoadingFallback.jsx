/**
 * PageLoadingFallback
 *
 * A lightweight, branded skeleton shown via Suspense while a lazy route chunk loads.
 *
 * Design rules:
 * - Matches the site's bg-[#f5f5f4] body background (no flash)
 * - Uses the brand's orange-500 accent on the progress line
 * - No heavy animation library — pure CSS only
 * - min-h-screen prevents CLS (layout shift) during load
 * - Accessible: aria-live="polite" and role="status"
 */
export default function PageLoadingFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Page loading"
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      {/* Top progress bar — approved brand blue & orange accent */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #102A56 0%, #2563EB 65%, #F97316 100%)",
          transformOrigin: "left center",
          animation: "navi-progress 1.4s ease-in-out infinite",
          zIndex: 9999,
        }}
      />

      {/* Subtle pulsing wordmark placeholder */}
      <div
        aria-hidden="true"
        style={{
          width: "120px",
          height: "32px",
          background: "linear-gradient(90deg, #F1F5F9 25%, #FFFFFF 50%, #F1F5F9 75%)",
          backgroundSize: "200% 100%",
          animation: "navi-shimmer 1.6s ease-in-out infinite",
          borderRadius: "8px",
        }}
      />

      {/* CSS keyframes injected inline — zero external deps */}
      <style>{`
        @keyframes navi-progress {
          0%   { transform: scaleX(0.05); opacity: 1; }
          50%  { transform: scaleX(0.75); opacity: 1; }
          100% { transform: scaleX(1);    opacity: 0; }
        }
        @keyframes navi-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
