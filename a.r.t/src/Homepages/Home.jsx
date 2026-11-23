import { useState } from "react";
import "./../artCss/Home.css";

//

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="home-page">

      {/* Navigation */}
      <header className="home-header">
        <a href="/" className="home-logo" onClick={closeMenu}>
          A.R.T
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`home-nav ${menuOpen ? "show-menu" : ""}`}>
          <a className="active" href="/" onClick={closeMenu}>Home</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/gallery" onClick={closeMenu}>Gallery</a>
          <a href="/blog" onClick={closeMenu}>Blog</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>

          <div className="nav-account-links">
            <a href="/log" onClick={closeMenu}>Login</a>
            <a href="/Register" className="register-link" onClick={closeMenu}>
              Register
            </a>
          </div>
        </nav>
      </header>

      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            ART • CREATIVITY • EXPRESSION
          </span>

          <h1>A.R.T</h1>

          <h2>Explore. Create. Be Inspired.</h2>

          <p>
            Art is more than what we see.
            It's what we feel, imagine and create.
          </p>

          <a href="/gallery" className="hero-button">
            View Gallery
          </a>
        </div>
      </section>

      {/* Mini Art Gallery */}
      <section className="mini-gallery">
        <div className="gallery-heading">
          <span className="eyebrow">A WORLD OF CREATIVITY</span>
          <h2>A Glimpse Into Our Gallery</h2>
          <p>
            Discover different perspectives, creative expressions
            and artwork that tells a story.
          </p>
        </div>

        <div className="mini-gallery-grid">

          <a href="/gallery" className="artwork artwork-one">
            <img
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700"
              alt="Colourful abstract painting"
            />
            <div className="artwork-overlay">
              <h3>Abstract Expressions</h3>
              <span>Explore artwork ↗</span>
            </div>
          </a>

          <a href="/gallery" className="artwork artwork-two">
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700"
              alt="Classical painting in an art gallery"
            />
            <div className="artwork-overlay">
              <h3>Classic Inspiration</h3>
              <span>Explore artwork ↗</span>
            </div>
          </a>

          <a href="/gallery" className="artwork artwork-three">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=700"
              alt="Contemporary artwork"
            />
            <div className="artwork-overlay">
              <h3>Modern Art</h3>
              <span>Explore artwork ↗</span>
            </div>
          </a>

          <a href="/gallery" className="artwork artwork-four">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700"
              alt="Artist painting on a canvas"
            />
            <div className="artwork-overlay">
              <h3>Creative Process</h3>
              <span>Explore artwork ↗</span>
            </div>
          </a>

        </div>

        <a href="/gallery" className="gallery-button">
          Explore Full Gallery
        </a>
      </section>

      {/* Featured sections */}
      <section className="home-features">

        <a href="/gallery" className="feature-card gallery-card">
          <div>
            <h3>Our Gallery</h3>
            <p>Discover creativity.</p>
          </div>
        </a>

        <a href="/about" className="feature-card about-card">
          <div>
            <h3>About A.R.T</h3>
            <p>Discover our story.</p>
          </div>
        </a>

        <a href="/blog" className="feature-card blog-card">
          <div>
            <h3>Our Blog</h3>
            <p>Thoughts, stories and inspiration.</p>
          </div>
        </a>

      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2026 A.R.T. All rights reserved.</p>

        <div className="footer-links">
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>

    </div>
  );
}

export default Home;
