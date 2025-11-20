import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header">
            <nav className="nav">
                <Link className="brand" to="/">Espaldar Ultra</Link>
                <button
                    className="nav-toggle"
                    aria-label="Abrir menú"
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    ☰
                </button>

                <ul className={`nav-menu ${open ? 'open' : ''}`}>
                    <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
                    <li><Link to="/semana04" onClick={() => setOpen(false)}>Semana 4</Link></li>
                    <li><Link to="/semana08" onClick={() => setOpen(false)}>Semana 8</Link></li>
                    <li><Link to="/semana11" onClick={() => setOpen(false)}>Semana 11</Link></li>
                </ul>
            </nav>
        </header>
    );
}
