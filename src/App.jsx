const projects = [
  { title: 'Product experiences', description: 'Accessible, responsive interfaces that turn complex workflows into clear actions.' },
  { title: 'Design systems', description: 'Reusable foundations that keep teams moving quickly without sacrificing quality.' },
  { title: 'Frontend engineering', description: 'Fast, maintainable React applications built around real user needs.' },
]

function App() {
  return (
    <main className="page-shell">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top">Developer Portfolio</a>
        <a className="nav-link" href="mailto:hello@example.com">Let&apos;s work together <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Front-end developer</p>
        <h1>I build digital products people enjoy using.</h1>
        <p className="intro">I&apos;m a developer focused on thoughtful interfaces, dependable systems, and the details that make a product feel effortless.</p>
        <a className="button" href="mailto:hello@example.com">Start a conversation <span aria-hidden="true">↗</span></a>
      </section>

      <section className="work" aria-labelledby="work-title">
        <div className="section-heading"><p className="eyebrow">What I do</p><h2 id="work-title">From first idea to polished interface.</h2></div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer"><span>© {new Date().getFullYear()} Developer Portfolio</span><a href="mailto:hello@example.com">hello@example.com</a></footer>
    </main>
  )
}

export default App
