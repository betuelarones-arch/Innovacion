import { useState } from 'react';
import '../css/Header.css';
// 1. Cambiar la importación de Link a NavLink
import { NavLink } from 'react-router-dom'; 

export default function Header() {
    const [open, setOpen] = useState(false);
    
    // Función para cerrar el menú, si es necesario
    const closeMenu = () => setOpen(false);

    // 2. Definir una función que determina la clase (para manejar estilos de NavLink)
    // Esto es necesario para la clase 'active' moderna en NavLink v6
    const navLinkClass = ({ isActive }) => isActive ? 'active' : '';

    return (
        <header className="site-header">
            <nav className="nav">
                {/* 3. Usar NavLink para el 'brand' también */}
                <NavLink className="brand" to="/" onClick={closeMenu}>Espaldar Ultra</NavLink> 
                <button
                    className="nav-toggle"
                    aria-label="Abrir menú"
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    ☰
                </button>

                <ul className={`nav-menu ${open ? 'open' : ''}`}>
                    {/* 4. Usar NavLink y aplicar la clase activa */}
                    <li><NavLink to="/" className={navLinkClass} onClick={closeMenu}>Inicio</NavLink></li>
                    <li><NavLink to="/semana06" className={navLinkClass} onClick={closeMenu}>Semana 6</NavLink></li>
                    <li><NavLink to="/semana08" className={navLinkClass} onClick={closeMenu}>Semana 8</NavLink></li>
                    <li><NavLink to="/semana10" className={navLinkClass} onClick={closeMenu}>Semana 10</NavLink></li>
                    <li><NavLink to="/semana12" className={navLinkClass} onClick={closeMenu}>Semana 12</NavLink></li>
                    <li><NavLink to="/semana14" className={navLinkClass} onClick={closeMenu}>Semana 14</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}