import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Semana04 from './pages/Semana04';
import Semana08 from './pages/Semana08';
import Semana11 from './pages/Semana11';


export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/semana04" element={<Semana04 />} />
          <Route path="/semana08" element={<Semana08 />} />
          <Route path="/semana11" element={<Semana11 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

