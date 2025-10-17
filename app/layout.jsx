import './globals.css';

export const metadata = {
  title: 'Aman Sharma · Experience Systems',
  description: 'Minimal Next.js experience system showcase.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <a className="brand" href="/">
              Aman Sharma
            </a>
            <nav aria-label="Main navigation">
              <a href="/">Home</a>
              <a href="/blog">Research</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <small>© {new Date().getFullYear()} Aman Sharma · Experience Systems</small>
          </div>
        </footer>
      </body>
    </html>
  );
}
