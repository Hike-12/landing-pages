/**
 * Loading
 * Contract: Loading(): JSX.Element
 *
 * Minimal full-viewport fallback for code-split route boundaries.
 * Uses the project's background/text tokens and respects reduced-motion.
 */
function Loading() {
  return (
    <>
      <style>{`
        @keyframes loading-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }

        .loading-pulse {
          animation: loading-pulse 2.4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .loading-pulse {
            animation: none;
          }
        }
      `}</style>
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg)',
          color: 'var(--text)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        <span className="loading-pulse">Loading</span>
      </div>
    </>
  )
}

export default Loading
