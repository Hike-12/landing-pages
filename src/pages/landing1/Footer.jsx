/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * Minimal 4-column footer for HEIRLOOM.
 * - Brand / Description
 * - Shop links
 * - Atelier links
 * - Social / Contact
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        {/* Brand */}
        <div className="site-footer__col site-footer__col--brand">
          <a
            href="/"
            className="site-footer__wordmark"
            aria-label="HEIRLOOM home"
          >
            HEIRLOOM
          </a>
          <p className="site-footer__description">
            Small-batch leather goods, shaped by hand and made to last a
            lifetime.
          </p>
        </div>

        {/* Shop */}
        <div className="site-footer__col">
          <h3 className="site-footer__heading">Shop</h3>
          <ul className="site-footer__links">
            <li>
              <a href="#collection">All Bags</a>
            </li>
            <li>
              <a href="#collection">Wallets</a>
            </li>
            <li>
              <a href="#collection">Accessories</a>
            </li>
            <li>
              <a href="#collection">Gift Cards</a>
            </li>
          </ul>
        </div>

        {/* Atelier */}
        <div className="site-footer__col">
          <h3 className="site-footer__heading">Atelier</h3>
          <ul className="site-footer__links">
            <li>
              <a href="#atelier">Our Story</a>
            </li>
            <li>
              <a href="#craftsmanship">Craftsmanship</a>
            </li>
            <li>
              <a href="#atelier">Sustainability</a>
            </li>
            <li>
              <a href="#journal">Journal</a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="site-footer__col">
          <h3 className="site-footer__heading">Connect</h3>
          <ul className="site-footer__links">
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#shipping">Shipping &amp; Returns</a>
            </li>
            <li>
              <a href="#care">Care Guide</a>
            </li>
          </ul>
          <div className="site-footer__social">
            <a
              href="#instagram"
              className="site-footer__social-link"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#x"
              className="site-footer__social-link"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {currentYear} HEIRLOOM. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
