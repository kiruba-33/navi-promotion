/**
 * preloadRoute — Prefetch a lazy route's JS chunk on mouse hover / keyboard focus.
 *
 * How it works:
 *   React.lazy() returns a "lazy component" whose internal promise factory
 *   is stored at ._payload._result (module-level singleton pattern).
 *   Calling the factory early triggers the dynamic import() which the browser
 *   then fetches, parses, and caches — so by the time the user clicks, the
 *   chunk is already warm.
 *
 *   We access this via the undocumented ._init / ._payload path used by React's
 *   Fiber reconciler internally.  We guard with try/catch so any React internal
 *   API change silently no-ops — the worst outcome is no prefetch, not an error.
 *
 * Usage:
 *   import { preloadRoute } from '@/utils/preloadRoute'
 *   <Link onMouseEnter={() => preloadRoute(AboutPage)} to="/about">About</Link>
 */

const preloaded = new Set();

export function preloadRoute(lazyComponent) {
  try {
    // Guard: already prefetched this chunk
    if (!lazyComponent || preloaded.has(lazyComponent)) return;
    preloaded.add(lazyComponent);

    // React lazy components expose ._payload which holds the import factory.
    // _status: 0 = pending, 1 = resolved, -1 = errored
    const payload = lazyComponent._payload;
    if (!payload) return;

    if (payload._status === 0 || payload._status === -1) {
      // Trigger the dynamic import — the browser will start fetching the chunk
      payload._result();
    }
  } catch {
    // Silently ignore — preloading is a progressive enhancement
  }
}
