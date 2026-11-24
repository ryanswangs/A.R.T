function Blog() {
  const posts = [
    { id: 1, title: 'My first post', date: '1 December 2026', body: 'Welcome to the blog.' },
    { id: 2, title: 'Another post', date: '8 December 2026', body: 'More thoughts here.' },
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p className="blog-date">{post.date}</p>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export default Blog;