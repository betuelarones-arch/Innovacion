import { NavLink } from 'react-router-dom';
import '../css/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top container">
                {/* Acerca de nosotros */}
                <div className="footer-column about">
                    <h3>Espaldar Ultra</h3>
                    <p>Somos un equipo dedicado a la innovación ergonómica, diseñando soluciones para mejorar la postura y el bienestar de nuestros usuarios.</p>
                </div>

                {/* Navegación rápida */}
                <div className="footer-column">
                    <h4>Navegación</h4>
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/semana06">Semana 6</NavLink>
                    <NavLink to="/semana08">Semana 8</NavLink>
                    <NavLink to="/semana10">Semana 10</NavLink>
                    <NavLink to="/semana12">Semana 12</NavLink>
                    <NavLink to="/semana14">Semana 14</NavLink>
                </div>

                {/* Proyecto */}
                <div className="footer-column">
                    <h4>Proyecto</h4>
                    <a href="#">Fase 1: Empatizar</a>
                    <a href="#">Fase 2: Definir</a>
                    <a href="#">Fase 3: Idear</a>
                    <a href="#">Fase 4: Prototipar</a>
                </div>

                {/* Contacto / Redes */}
                <div className="footer-column">
                    <h4>Contacto</h4>
                    <p>Email: contacto@espaldarultra.com</p>
                    <p>Tel: +51 987 654 321</p>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom container">
                <small>© {new Date().getFullYear()} Espaldar Ultra - Proyecto Design Thinking. Todos los derechos reservados.</small>
            </div>
        </footer>
    );
}
