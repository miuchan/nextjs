export const metadata = {
  title: 'Research Showcase — Aman Sharma',
  description: 'Highlights from collaborative research in experience systems.',
};

const posts = [
  {
    title: 'Zhang Teslendia: Harmonizing Tangible Interfaces',
    excerpt:
      'A deep dive into multisensory installations that dissolve the boundary between physical and digital worlds.',
  },
  {
    title: 'Story-driven Dashboards',
    excerpt:
      'Combining data visualization with narrative arcs to make metrics accessible, compelling, and memorable.',
  },
  {
    title: 'Prototyping Rituals',
    excerpt: 'Lightweight workshops that cultivate empathy with audiences before committing to production.',
  },
];

export default function BlogPage() {
  return (
    <section className="stack">
      <h1>Research Showcase</h1>
      <p>
        Each vignette captures a moment from the Experience Systems practice. Reuse this route to list
        long-form writing, link to external case studies, or embed interactive media served from the
        <code>public/</code> directory.
      </p>
      <div className="grid">
        {posts.map((post) => (
          <article key={post.title} className="card">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a className="button" href="#">Read more</a>
          </article>
        ))}
      </div>
    </section>
  );
}
