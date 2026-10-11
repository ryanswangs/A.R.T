import { useState } from "react";
import "./../artCss/Home.css";

const exhibitions = [
  {
    number: "01",
    title: "Low Tide",
    artist: "Maren Solberg",
    category: "Painting",
    dates: "12 Sep — 02 Nov",
    status: "NOW SHOWING",
    description:
      "An exploration of the Norwegian coastline through texture, memory and the quiet passage of time.",
  },
  {
    number: "02",
    title: "Correspondence",
    artist: "Femi Adebayo",
    category: "Mixed Media",
    dates: "14 Nov — 20 Dec",
    status: "UPCOMING",
    description:
      "Letters, fragments and found objects come together to explore the stories we leave behind.",
  },
  {
    number: "03",
    title: "Standing Water",
    artist: "Iris Kowalczyk",
    category: "Sculpture",
    dates: "09 Jan — 15 Feb",
    status: "UPCOMING",
    description:
      "An investigation into reflection, stillness and the relationship between nature and structure.",
  },
];

const artists = [
  {
    number: "01",
    name: "Maren Solberg",
    discipline: "Painting & mixed media",
    location: "Norway",
  },
  {
    number: "02",
    name: "Femi Adebayo",
    discipline: "Contemporary mixed media",
    location: "Nigeria",
  },
  {
    number: "03",
    name: "Iris Kowalczyk",
    discipline: "Sculpture & installation",
    location: "Poland",
  },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Exhibitions", href: "#exhibitions" },
    { label: "Artists", href: "#artists" },
    { label: "About", href: "#about" },
    { label: "Visit", href: "#visit" },
  ];

  return (
    <div className="hh-page">
      {/* NAVIGATION */}
      <header className="hh-header">
        <a href="#home" className="hh-logo" onClick={closeMenu}>
          <span className="hh-logo-mark">H.</span>
          <span className="hh-logo-text">
            <strong>HALDEN HOUSE</strong>
            <small>ART & CULTURE</small>
          </span>
        </a>

        <nav className={`hh-nav ${menuOpen ? "hh-nav-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="hh-nav-link"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#visit"
            className="hh-mobile-cta"
            onClick={closeMenu}
          >
            Plan your visit ↗
          </a>
        </nav>

        <a href="#visit" className="hh-header-cta">
          Plan your visit <span>↗</span>
        </a>

        <button
          className={`hh-menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="gallery-navigation"
        >
          <span />
          <span />
        </button>
      </header>

      {/* HOME / HERO */}
      <main>
        <section className="hh-hero" id="home">
          <div className="hh-hero-top">
            <span>INDEPENDENT CONTEMPORARY ART</span>
            <span>PRETORIA, SOUTH AFRICA</span>
          </div>

          <div className="hh-hero-content">
            <div className="hh-hero-copy">
              <p className="hh-eyebrow">
                <span className="hh-status-dot" />
                A place to see things differently
              </p>

              <h1>
                Art that moves
                <br />
                <em>something within.</em>
              </h1>

              <p className="hh-hero-description">
                A contemporary gallery bringing together bold ideas,
                emerging perspectives and artists who challenge the
                way we see the world.
              </p>

              <div className="hh-hero-actions">
                <a href="#exhibitions" className="hh-button hh-button-dark">
                  Explore exhibitions <span>↗</span>
                </a>

                <a href="#about" className="hh-text-link">
                  Discover our story <span>→</span>
                </a>
              </div>
            </div>

            <div className="hh-hero-art" aria-hidden="true">
              <div className="hh-art-circle hh-circle-one" />
              <div className="hh-art-circle hh-circle-two" />
              <span className="hh-art-letter">H</span>
              <span className="hh-art-caption">
                AN OPEN SPACE
                <br />
                FOR NEW IDEAS
              </span>
              <span className="hh-art-index">EST. MMXVIII</span>
            </div>
          </div>

          <div className="hh-hero-bottom">
            <span>LOOK CLOSER.</span>
            <span>THINK DEEPER.</span>
            <span>FEEL MORE.</span>
            <a href="#exhibitions" aria-label="Scroll to exhibitions">
              ↓
            </a>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="hh-intro" id="about">
          <div className="hh-section-label">
            <span>01 / OUR PHILOSOPHY</span>
            <span>MORE THAN WHAT MEETS THE EYE</span>
          </div>

          <div className="hh-intro-grid">
            <h2>
              We believe art
              <br />
              should make you
              <br />
              <em>feel something.</em>
            </h2>

            <div className="hh-intro-copy">
              <p>
                Art gives us another way to understand ourselves
                and the world around us. It asks questions,
                challenges assumptions and creates connections
                where we least expect them.
              </p>

              <p>
                Halden House is a space for curiosity. We bring
                artists and audiences together through thoughtful
                exhibitions, meaningful conversations and new ideas.
              </p>

              <a href="#artists" className="hh-underlined-link">
                Meet the artists <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hh-values">
            <div>
              <span className="hh-value-number">01</span>
              <h3>Curiosity</h3>
              <p>Look beyond what you already know.</p>
            </div>

            <div>
              <span className="hh-value-number">02</span>
              <h3>Perspective</h3>
              <p>Discover stories told differently.</p>
            </div>

            <div>
              <span className="hh-value-number">03</span>
              <h3>Connection</h3>
              <p>Find meaning in shared experiences.</p>
            </div>
          </div>
        </section>

        {/* EXHIBITIONS */}
        <section className="hh-exhibitions" id="exhibitions">
          <div className="hh-section-label">
            <span>02 / THE PROGRAMME</span>
            <span>ARTISTS · IDEAS · EXPERIENCES</span>
          </div>

          <div className="hh-section-heading">
            <h2>
              What&apos;s
              <br />
              <em>happening.</em>
            </h2>

            <p>
              Explore current and upcoming exhibitions,
              each offering a new way to experience contemporary art.
            </p>
          </div>

          <div className="hh-exhibition-list">
            {exhibitions.map((exhibition) => (
              <article className="hh-exhibition" key={exhibition.number}>
                <span className="hh-exhibition-number">
                  {exhibition.number}
                </span>

                <div className="hh-exhibition-content">
                  <div className="hh-exhibition-meta">
                    <span>{exhibition.category}</span>
                    <span className="hh-meta-divider">/</span>
                    <span>{exhibition.status}</span>
                  </div>

                  <h3>{exhibition.title}</h3>
                  <p className="hh-exhibition-artist">
                    By {exhibition.artist}
                  </p>

                  <p className="hh-exhibition-description">
                    {exhibition.description}
                  </p>
                </div>

                <div className="hh-exhibition-date">
                  <span>EXHIBITION DATES</span>
                  <p>{exhibition.dates}</p>
                  <span className="hh-exhibition-category">
                    {exhibition.category}
                  </span>
                </div>

                <span className="hh-exhibition-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>

          <div className="hh-exhibitions-footer">
            <span>THERE IS ALWAYS SOMETHING NEW TO DISCOVER.</span>
            <a href="#visit">Experience it for yourself ↗</a>
          </div>
        </section>

        {/* ARTISTS */}
        <section className="hh-artists" id="artists">
          <div className="hh-section-label">
            <span>03 / THE PEOPLE</span>
            <span>BEHIND THE WORK</span>
          </div>

          <div className="hh-artists-heading">
            <h2>
              Meet the
              <br />
              <em>artists.</em>
            </h2>

            <p>
              Every work begins with a person, a perspective
              and a story worth sharing.
            </p>
          </div>

          <div className="hh-artist-list">
            {artists.map((artist) => (
              <div className="hh-artist-row" key={artist.number}>
                <span className="hh-artist-number">{artist.number}</span>

                <h3>{artist.name}</h3>

                <span className="hh-artist-discipline">
                  {artist.discipline}
                </span>

                <span className="hh-artist-location">
                  {artist.location}
                </span>

                <span className="hh-artist-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* VISIT */}
        <section className="hh-visit" id="visit">
          <div className="hh-visit-top">
            <span>04 / YOUR NEXT EXPERIENCE</span>
            <span>HALDEN HOUSE · PRETORIA</span>
          </div>

          <div className="hh-visit-content">
            <h2>
              Make room
              <br />
              <em>for wonder.</em>
            </h2>

            <div className="hh-visit-details">
              <p>
                Step away from the everyday. Spend time with art,
                find a new perspective and leave with something
                to think about.
              </p>

              <a href="mailto:hello@haldenhouse.com" className="hh-button hh-button-light">
                Get in touch <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hh-visit-bottom">
            <span>COME CURIOUS.</span>
            <span>LEAVE INSPIRED.</span>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="hh-footer">
        <a href="#home" className="hh-footer-brand">
          HALDEN HOUSE<span>.</span>
        </a>

        <p>Independent art. Open perspectives.</p>

        <div className="hh-footer-links">
          <a href="#exhibitions">Exhibitions</a>
          <a href="#artists">Artists</a>
          <a href="#about">About</a>
          <a href="#visit">Contact</a>
        </div>

        <span className="hh-copyright">
          © {new Date().getFullYear()} HALDEN HOUSE
        </span>
      </footer>
    </div>
  );
}

export default Home;