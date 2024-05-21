import { Routes, Route, Link} from 'react-router-dom';
import NavBar from './ui/NavBar/NavBar';
import Home from './ui/Home/Home';
import Work from './ui/Work/Work';
import About from './ui/About/About';
import Contact from './ui/Contact/Contact';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/">
          <div className="app-logo">
            <div className="raays">RAAYS</div>
            <div className="description">Software Engineer and Designer</div>
          </div>
        </Link>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/sketches" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
