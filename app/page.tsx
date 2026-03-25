import Image from "next/image";

export default function Home() {
  return (
    <main className="site">
      <div className="bg-grid" />
      <div className="bg-scan" />
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />

      <header className="topbar glass-edge">
        <div className="brand">CZARINA AGONCILLO</div>

        <nav className="nav">
          <a href="#books">Books</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#protection">Protection</a>
        </nav>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">
            Author · SEO Specialist · MARKETING TECHNOLOGIST
          </span>

          <h1>
            I write for minds
            <br />
            that reject narrow systems.
          </h1>

          <p className="lead">
            I build structure for visibility, and I am drawn to building things
            that can protect both human beings and the systems they depend on.
          </p>

          <div className="actions">
            <a href="#books" className="btn btn-primary">
              View Books
            </a>
            <a href="#capabilities" className="btn btn-secondary">
              MY WORKS
            </a>
          </div>
        </div>

        <div className="hero-visual glass-edge">
          <div className="portrait-wrap">
            <div className="portrait-overlay" />
            <Image
              src="/czarina.png"
              alt="Czarina Agoncillo"
              width={900}
              height={1200}
              priority
              className="portrait"
            />
          </div>
        </div>
      </section>

      <section className="statement container glass-edge">
        <p>
          Some systems fail quietly. Some people notice the fracture before the
          collapse. That is where I work.
        </p>
      </section>

      <section id="books" className="section container">
        <div className="section-head">
          <span className="label">Books</span>
          <h2>Writing with depth, not pressure.</h2>
          <p>
            My books are for people who think deeply, feel intensely, and do not
            want to be forced into structures that flatten who they are.
          </p>
        </div>

        <div className="cards-grid">
          <article className="card glass-edge">
            <span className="card-label">Book</span>
            <h3>The Gentle Activation Guide</h3>
            <p>7 Low-overwhelm routines for neurodivergent minds.</p>
          </article>

          <article className="card glass-edge">
            <span className="card-label">Book</span>
            <h3>The Gentle Return</h3>
            <p>Healing, softness, and power without force.</p>
          </article>

          <article className="card glass-edge">
            <span className="card-label">Book</span>
            <h3>The Anchor Parent</h3>
            <p>Compassionate support for ADHD and neurodivergent families.</p>
          </article>
        </div>
      </section>

      <section id="capabilities" className="section container split">
        <div className="section-copy glass-edge">
          <span className="label">Capabilities</span>
          <h2>SEO, systems, structure, and signal.</h2>
          <p>
            I work on discoverability, entity clarity, technical structure, and
            environments that are built to hold pressure instead of hiding it.
          </p>
        </div>

        <div className="stack">
          <article className="card glass-edge">
            <span className="card-label">Technical SEO</span>
            <p>
              Structure, indexing logic, semantic clarity, and visibility rooted
              in meaning.
            </p>
          </article>

          <article className="card glass-edge">
            <span className="card-label">Systems Building</span>
            <p>
              Creating frameworks, workflows, and environments that reduce
              silent failure.
            </p>
          </article>

          <article className="card glass-edge">
            <span className="card-label">Signal Detection</span>
            <p>
              Looking for hidden patterns, weak points, and the first signs of
              breakdown.
            </p>
          </article>
        </div>
      </section>

      <section id="protection" className="section container">
        <div className="feature glass-edge">
          <span className="label">Protection</span>
          <h2>I am interested in building things that protect both human and system.</h2>
          <p>
            Protection is not only technical. It is structural, emotional,
            behavioral, and informational. The most dangerous failures are often
            the ones people trust too early.
          </p>

          <div className="pills">
            <span>Human</span>
            <span>System</span>
            <span>Structure</span>
            <span>Signal</span>
          </div>
        </div>
      </section>
    </main>
  );
}