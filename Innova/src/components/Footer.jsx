import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-content">
				<div className="footer-brand">
					<h3>Espaldar Ultra</h3>
					<p>Innovación en ergonomía para el bienestar postural</p>
				</div>

				<div className="footer-links">
					<h4>Navegación</h4>
					<Link to="/">Inicio</Link>
					<a href="#">Proyecto Completo</a>
					<a href="#problema">El Problema</a>
					<a href="#solucion">Solución</a>
				</div>

				<div className="footer-links">
					<h4>Proyecto</h4>
					<a href="#">Fase 1: Empatizar</a>
					<a href="#">Fase 2: Definir</a>
					<a href="#">Fase 3: Idear</a>
					<a href="#">Fase 4: Prototipar</a>
				</div>
			</div>

			<div className="footer-bottom container">
				<small>© {new Date().getFullYear()} Espaldar Ultra - Proyecto Design Thinking</small>
			</div>
		</footer>
	);
}
