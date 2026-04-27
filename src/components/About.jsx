import './About.css';

function About() {
  return (
    <section id="accueil" className="about">
      <div className="about-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-tagline">Bienvenue au cœur de Paris</p>
          <h1 className="hero-title">Hôtel Lumière</h1>
          <p className="hero-sub">Une expérience de luxe intemporelle</p>
          <a href="#chambres" className="hero-btn">Découvrir nos chambres</a>
        </div>
      </div>

      <div className="about-info">
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&auto=format&fit=crop"
            alt="Lobby de l'hôtel"
            className="about-img"
          />
        </div>
        <div className="about-text">
          <span className="section-label">À propos</span>
          <h2>Un havre d'élégance au cœur de Paris</h2>
          <p>
            Niché au cœur du 1er arrondissement, l'Hôtel Lumière incarne le raffinement 
            français dans toute sa splendeur. Depuis 1921, nous accueillons nos hôtes dans 
            un cadre alliant le charme haussmannien à un confort moderne irréprochable.
          </p>
          <p>
            Chaque détail a été pensé pour vous offrir une expérience inoubliable — 
            du mobilier chiné avec soin aux matières nobles qui habillent chaque espace.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;