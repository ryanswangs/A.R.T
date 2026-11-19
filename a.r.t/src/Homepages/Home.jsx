
import "./../artCss/Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Navigation */}
      <header className="home-header">
        <a href="/" className="home-logo">A.R.T</a>

        <nav className="home-nav">
          <a className="active" href="/">Home</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
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
