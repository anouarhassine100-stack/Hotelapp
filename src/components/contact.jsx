import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (form.nom && form.email && form.message) {
      setSent(true);
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <span className="section-label">Nous contacter</span>
          <h2>Réservez votre séjour</h2>
          <div className="contact-details">
            <p>📍 12 Rue de Rivoli, 75001 Paris</p>
            <p>📞 +33 1 42 60 34 56</p>
            <p>✉️ contact@hotellumiere.fr</p>
          </div>
        </div>

        <div className="contact-form">
          {sent ? (
            <div className="form-success">
              <span>✦</span>
              <p>Merci ! Nous vous répondrons dans les 24h.</p>
            </div>
          ) : (
            <>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={form.nom}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={form.email}
                onChange={handleChange}
                className="form-input"
              />
              <textarea
                name="message"
                placeholder="Votre message"
                value={form.message}
                onChange={handleChange}
                className="form-input form-textarea"
                rows={5}
              />
              <button className="form-btn" onClick={handleSubmit}>
                Envoyer
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;