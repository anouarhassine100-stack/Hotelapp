import './Header.css';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Chambres', href: '#chambres' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="logo-icon">✦</div>
        <span className="logo-text">Hôtel Lumière</span>
      </div>
      <nav className="header-nav">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-btn">Réserver</a>
      </nav>
    </header>
  );
}

export default Header;