import { Link } from 'react-router-dom'

/**
 * Home
 * Contract: Home(): JSX.Element
 *
 * Hub page that links to each landing page route.
 * - Centered layout inside the 1126px #root container
 * - Uses project CSS variables and the existing ui-button primitive
 */
function Home() {
  const routes = [
    { path: '/landing1', label: 'HEIRLOOM Landing Page' },
  ]

  return (
    <main className="home">
      <h1 className="home__title">Landing Pages</h1>
      <p className="home__subtext">Choose a direction to explore.</p>
      <nav className="home__nav" aria-label="Landing pages">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="ui-button ui-button--default"
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </main>
  )
}

export default Home
