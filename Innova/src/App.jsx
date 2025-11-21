import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Semana04 from './pages/Semana04';
import Semana06 from './pages/Semana06';
import Semana10 from './pages/Semana10';


export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/semana04" element={<Semana04 />} />
          <Route path="/semana08" element={<Semana06 />} />
          <Route path="/semana10" element={<Semana10 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

