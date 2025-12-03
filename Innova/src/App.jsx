import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

import Inicio from './pages/Inicio';
import Semana02 from './pages/Semana02';
import Semana04 from './pages/Semana04';
import Semana06 from './pages/Semana06';
import Semana08 from './pages/Semana08';
import Semana10 from './pages/Semana10';
import Semana12 from './pages/Semana12';
import Semana14 from './pages/Semana14';


export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/semana02" element={<Semana02 />} />
          <Route path="/semana04" element={<Semana04 />} />
          <Route path="/semana06" element={<Semana06 />} />
          <Route path="/semana08" element={<Semana08 />} />
          <Route path="/semana10" element={<Semana10 />} />
          <Route path="/semana12" element={<Semana12 />} />
          <Route path="/semana14" element={<Semana14 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

