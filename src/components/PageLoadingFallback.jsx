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
        background: "#f5f5f4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      {/* Top progress bar — brand orange, smooth CSS animation */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #f97316 0%, #fb923c 60%, #fbbf24 100%)",
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
          background: "linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%)",
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
