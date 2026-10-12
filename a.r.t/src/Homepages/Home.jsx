import { useState } from "react";
import "./../artCss/Home.css";

function Home() {
 
  return (
    <>
      <header id="header">
        <a href="/" className="logo">
          <img src="/images/logo.jpg" alt="Mustacchio logo" />
        </a>

        <nav>
          <ul id="navigation">
            <li className="selected">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="body">
        <section id="featured">
          <img
            src="/images/the-beacon.jpg"
            alt="Featured photograph"
          />

          <div>
            <h2>The beacon to all mankind</h2>
            <p>
              Our website templates are created with inspiration,
              checked for quality and originality, and meticulously
              sliced and coded.
            </p>

            <a href="/blog-single-post" className="more">
              Read more
            </a>
          </div>
        </section>

        <section className="featured-people">
          <ul>
            <li>
              <a href="/gallery">
                <img src="/images/the-father.jpg" alt="The father" />
                <span>The father</span>
              </a>
            </li>

            <li>
              <a href="/gallery">
                <img src="/images/the-actor.jpg" alt="The actor" />
                <span>The actor</span>
              </a>
            </li>

            <li>
              <a href="/gallery">
                <img src="/images/the-nerd.jpg" alt="The nerd" />
                <span>The nerd</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer id="footer">
        <div>
          <p>
            &copy; 2026 by Mustacchio. All rights reserved.
          </p>

          <ul className="social-links">
            <li>
              <a
                href="https://twitter.com/"
                id="twitter"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/"
                id="facebook"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://pinterest.com/"
                id="pinterest"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
    
export default Home;