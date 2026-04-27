import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Rooms />
      <Contact />
      <footer className="footer">
        <p>© 2025 Hôtel Lumière — Tous droits réservés</p>
      </footer>
    </>
  );
}

export default App;
