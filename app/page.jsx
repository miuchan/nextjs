export default function HomePage() {
  return (
    <section className="stack">
      <h1>Aman Sharma · Experience Systems</h1>
      <p>
        This minimal Next.js build distills the portfolio into a single page application. It
        demonstrates the most essential patterns of the App Router: nested layouts, server components,
        and static assets. Use it as a starting point for experimenting with ideas and growing the
        site into a richer storytelling experience.
      </p>
      <article className="card">
        <h2>Featured Work</h2>
        <ul>
          <li>
            <strong>Experience Systems</strong> – Tools for weaving narrative and data into delightful
            interfaces.
          </li>
          <li>
            <strong>Research Showcase</strong> – Curated insights from Zhang Teslendia and collaborators.
          </li>
          <li>
            <strong>Interactive Demos</strong> – Legacy prototypes preserved under <code>/public</code>.
          </li>
        </ul>
      </article>
      <article className="card">
        <h2>Get started</h2>
        <ol>
          <li>Run <code>npm install</code> to pull dependencies.</li>
          <li>Start the dev server with <code>npm run dev</code>.</li>
          <li>
            Explore <code>app/blog/page.jsx</code> to see how routes inherit layout and share styles.
          </li>
        </ol>
      </article>
    </section>
  );
}
