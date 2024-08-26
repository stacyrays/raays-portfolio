import { Routes, Route, Link} from 'react-router-dom';
import NavBar from './ui/NavBar/NavBar';
import Home from './ui/Home/Home';
import Projects from './ui/Projects/Projects';
import Scuba from './ui/Scuba/Scuba';
import StreamingApp from './ui/StreamingApp/StreamingApp';
import About from './ui/About/About';
import ApiConnections from './ui/ApiConnections/ApiConnections';
import Contact from './ui/Contact/Contact';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/">
          <div className="app-logo">
            <div className="raays">raays</div>
            <div className="description">software engineering and ui design</div>
          </div>
        </Link>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/scuba" element={<Scuba />} />
        <Route path="/projects/streaming-app" element={<StreamingApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/api-connections" element={<ApiConnections />} />
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
