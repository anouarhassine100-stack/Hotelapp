import './Services.css';

const servicesData = [
  { nom: 'Spa & Bien-être', image: '🧖', description: 'Massages, soins et bain thermal dans notre espace détente.' },
  { nom: 'Restaurant Gastronomique', image: '🍽️', description: 'Cuisine française raffinée par notre chef étoilé.' },
  { nom: 'Wi-Fi Premium', image: '📶', description: 'Connexion haut débit gratuite dans tout l\'établissement.' },
  { nom: 'Piscine Intérieure', image: '🏊', description: 'Piscine chauffée ouverte 7j/7 de 7h à 22h.' },
  { nom: 'Parking Privé', image: '🚗', description: 'Parking sécurisé avec service de voiturier.' },
  { nom: 'Room Service', image: '🛎️', description: 'Service en chambre disponible 24h/24.' },
];

function ServiceCard({ nom, image, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">{image}</div>
      <h3 className="service-name">{nom}</h3>
      <p className="service-desc">{description}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <span className="section-label">Ce que nous offrons</span>
        <h2>Nos Services</h2>
      </div>
      <div className="services-grid">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.nom}
            nom={service.nom}
            image={service.image}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;