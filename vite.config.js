import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Target modern browsers — smaller output, no legacy polyfills
    target: "es2020",
    // Raise warning threshold — expected due to large route tree
    chunkSizeWarningLimit: 600,
    rolldownOptions: {
      output: {
        // Intelligent manual chunk splitting
        manualChunks(id) {
          // React core — tiny, always cached
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "vendor-react";
          }
          // Router — stable, changes rarely
          if (id.includes("node_modules/react-router") || id.includes("node_modules/@remix-run")) {
            return "vendor-router";
          }
          // Framer Motion — large animation library
          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/motion")) {
            return "vendor-motion";
          }
          // Lucide icons — tree-shaken but still a notable chunk
          if (id.includes("node_modules/lucide-react")) {
            return "vendor-icons";
          }
          // Utility libs — clsx, tailwind-merge, class-variance-authority
          if (
            id.includes("node_modules/clsx") ||
            id.includes("node_modules/tailwind-merge") ||
            id.includes("node_modules/class-variance-authority")
          ) {
            return "vendor-utils";
          }
          // Email / form libs — loaded lazily via ApplyNowModal already
          if (id.includes("node_modules/@emailjs")) {
            return "vendor-emailjs";
          }
          // react-helmet-async — SEO, stable
          if (id.includes("node_modules/react-helmet-async") || id.includes("node_modules/react-fast-compare")) {
            return "vendor-helmet";
          }
        },
      },
    },
  },
});