import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

/**
 * LazySection
 * 
 * A wrapper component that delays rendering its children until it enters
 * the viewport (or comes within the specified margin). This is used in 
 * combination with React.lazy() to prevent heavy components from being 
 * fetched or rendered during the initial page load.
 */
export default function LazySection({ 
  children, 
  fallback = <div style={{ minHeight: "300px" }} />, 
  margin = "400px" 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasLoaded(true);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      {hasLoaded ? children : fallback}
    </div>
  );
}
