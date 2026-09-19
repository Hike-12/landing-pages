import { useCallback, useSyncExternalStore } from 'react'

/**
 * ThemeToggle
 * Contract: ThemeToggle(): JSX.Element
 *
 * Accessible dark/light theme toggle.
 * - Subscribes to the document root .dark class so state is always in sync
 * - Toggles the .dark class and persists the choice to localStorage
 */
function subscribeDarkClass(callback) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
  return () => observer.disconnect()
}

function getDarkClassSnapshot() {
  return document.documentElement.classList.contains('dark')
}

function getDarkClassServerSnapshot() {
  return false
}

function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeDarkClass,
    getDarkClassSnapshot,
    getDarkClassServerSnapshot
  )

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      root.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }, [isDark])

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
