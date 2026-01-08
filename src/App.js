import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
