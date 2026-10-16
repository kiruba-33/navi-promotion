import React, { useRef, useState, useEffect } from "react";

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
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (hasLoaded) return;
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setHasLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting) {
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [margin, hasLoaded]);

  return (
    <div ref={ref}>
      {hasLoaded ? children : fallback}
    </div>
  );
}
