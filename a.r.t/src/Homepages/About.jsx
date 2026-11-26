function About() {
  const artworks = [
    { id: 1, src: '/images/art1.jpg', alt: 'Describe the first artwork', caption: 'Title one' },
    { id: 2, src: '/images/art2.jpg', alt: 'Describe the second artwork', caption: 'Title two' },
    { id: 3, src: '/images/art3.jpg', alt: 'Describe the third artwork', caption: 'Title three' },
  ];

  return (
    <div className="about">
      <h1>About A.R.T</h1>
      <p>Write a sentence or two here about what the A.R.T website is and who it's for.</p>
      <p>Add a second paragraph about why you made it or what visitors can do here.</p>

      <h2>A little art</h2>
      <div className="gallery">
        {artworks.map((art) => (
          <figure key={art.id}>
            <img src={art.src} alt={art.alt} />
            <figcaption>{art.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default About;