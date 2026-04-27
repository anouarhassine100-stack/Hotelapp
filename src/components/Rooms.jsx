import './Rooms.css';

const roomsData = [
  {
    nom: 'Suite Deluxe',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop',
    prix: '189',
    description: 'Vue sur la Seine, lit king-size, salle de bain en marbre avec baignoire balnéo.',
  },
  {
    nom: 'Chambre Standard',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop',
    prix: '129',
    description: 'Chambre élégante avec lit double, bureau et vue sur les toits de Paris.',
  },
  {
    nom: 'Suite Familiale',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop',
    prix: '249',
    description: 'Deux chambres communicantes, salon privé et terrasse avec vue panoramique.',
  },
];

function RoomCard({ nom, image, prix, description }) {
  return (
    <div className="room-card">
      <div className="room-img-wrap">
        <img src={image} alt={nom} className="room-img" />
        <div className="room-price">€{prix} <span>/ nuit</span></div>
      </div>
      <div className="room-body">
        <h3 className="room-name">{nom}</h3>
        <p className="room-desc">{description}</p>
        <a href="#contact" className="room-btn">Réserver</a>
      </div>
    </div>
  );
}

function Rooms() {
  return (
    <section id="chambres" className="rooms">
      <div className="section-header">
        <span className="section-label">Confort & Élégance</span>
        <h2>Nos Chambres</h2>
      </div>
      <div className="rooms-grid">
        {roomsData.map((room) => (
          <RoomCard
            key={room.nom}
            nom={room.nom}
            image={room.image}
            prix={room.prix}
            description={room.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Rooms;