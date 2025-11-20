// src/pages/Inicio.jsx
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import hero from '../img/hero.jpg';
// Importar recursos (Asegúrate de que estas rutas sean correctas)
import ejemploImg from '../img/ejemplo.png';

// Función para manejar el smooth scroll a secciones internas
const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
        // En un entorno React/SPA, es mejor usar JS para el scroll
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const Inicio = () => {
    // Reemplaza el script de Vanilla JS para el Smooth Scroll del HTML
    useEffect(() => {
        // Seleccionamos solo los enlaces internos de esta página
        const anchors = document.querySelectorAll('main.container a[href^="#"]');
        
        const scrollHandler = (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href && href.startsWith('#')) {
                scrollToSection(e, href.substring(1));
            }
        };

        anchors.forEach(anchor => {
            anchor.addEventListener('click', scrollHandler);
        });

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', scrollHandler);
            });
        };
    }, []);
    
    // **NOTA IMPORTANTE:** Se han eliminado los `problemData`, `phaseData`, y `teamData` 
    // porque ahora el HTML se renderiza directamente, sin mapeo de arrays.

    return (
        <>
            {/* HERO PRINCIPAL */}
            <section className="hero-main">
                {/* Nota: Se usa la sintaxis de estilo en línea de React con la variable CSS */}
                <div 
                    className="hero-bg" 
                    // Se usa la sintaxis de variable CSS en React: {{'--variableName': 'value'}}
                    style={{'--hero': `url(hero)`}}
                ></div>
                <div className="hero-layer"></div>
                <div className="hero-content container">
                    <span className="badge">Innovación Ergonómica</span>
                    <h1>Espaldar <span className="highlight-text">Ultra</span></h1>
                    <p className="lead">
                        Una solución inteligente diseñada con metodología Design Thinking para mejorar 
                        la postura y el bienestar de estudiantes y profesionales.
                    </p>
                    <div className="cta">
                        {/* Enlace externo/completo, se mantiene <a> */}
                        <a className="btn primary" href="#">Ver Proyecto Completo</a>
                        {/* Enlace interno a una sección, usa <a> con onClick para smooth scroll */}
                        <a className="btn ghost" href="#problema" onClick={(e) => scrollToSection(e, 'problema')}>Conocer Más</a>
                    </div>
                    
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">4-8</span>
                            <span className="stat-label">Horas sentados diarias</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">85%</span>
                            <span className="stat-label">Reportan dolor postural</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">5</span>
                            <span className="stat-label">Fases Design Thinking</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCCIÓN y Contenido Principal */}
            <main className="container">
                <section className="intro-section">
                    <div className="intro-content">
                        <h2>¿Por qué <em>Espaldar Ultra</em>?</h2>
                        <p className="intro-text">
                            En un mundo donde estudiantes y profesionales pasan entre 4 y 8 horas diarias sentados, 
                            los problemas posturales se han convertido en una preocupación creciente. El dolor de espalda, 
                            cuello y zona lumbar afecta directamente el rendimiento académico y laboral.
                        </p>
                        <p className="intro-text">
                            <strong>Espaldar Ultra</strong> nace como respuesta a esta necesidad, desarrollado mediante 
                            la metodología <em>Design Thinking</em> y fabricado con tecnología de impresión 3D para 
                            ofrecer una solución personalizable, accesible y efectiva.
                        </p>
                    </div>
                </section>

                {/* EL PROBLEMA */}
                <section className="problem-section" id="problema">
                    <div className="section-header">
                        <span className="section-number">01</span>
                        <h2>El Problema</h2>
                        <p className="section-subtitle">
                            Identificamos los desafíos reales que enfrentan nuestros usuarios
                        </p>
                    </div>

                    <div className="problem-grid">
                        <div className="problem-card">
                            <div className="icon">⏰</div>
                            <h3>Largas Jornadas Sedentarias</h3>
                            <p>
                                Estudiantes y trabajadores permanecen entre 4 y 8 horas diarias en posición sentada, 
                                aumentando el riesgo de problemas musculoesqueléticos.
                            </p>
                        </div>

                        <div className="problem-card">
                            <div className="icon">🪑</div>
                            <h3>Falta de Ergonomía</h3>
                            <p>
                                La mayoría utiliza sillas sin soporte lumbar adecuado, lo que provoca malas posturas 
                                y tensión en espalda y cuello.
                            </p>
                        </div>

                        <div className="problem-card">
                            <div className="icon">💰</div>
                            <h3>Soluciones Inaccesibles</h3>
                            <p>
                                Las sillas ergonómicas profesionales tienen costos elevados que dificultan su 
                                adquisición para estudiantes y trabajadores.
                            </p>
                        </div>

                        <div className="problem-card">
                            <div className="icon">😣</div>
                            <h3>Impacto en la Salud</h3>
                            <p>
                                Dolores recurrentes en zona lumbar, cuello y espalda que afectan la concentración, 
                                el rendimiento y la calidad de vida.
                            </p>
                        </div>
                    </div>
                </section>

                {/* NUESTRA SOLUCIÓN */}
                <section className="solution-section" id="solucion">
                    <div className="section-header">
                        <span className="section-number">02</span>
                        <h2>Nuestra Solución</h2>
                        <p className="section-subtitle">
                            Un espaldar inteligente desarrollado con metodología Design Thinking
                        </p>
                    </div>

                    <div className="solution-content">
                        <div className="solution-image">
                            {/* Importa la imagen como módulo en React */}
                            <img src={ejemploImg} alt="Espaldar Ultra en uso" />
                        </div>

                        <div className="solution-text">
                            <h3>Espaldar Ultra: Ergonomía Personalizada</h3>
                            
                            <div className="feature">
                                <div className="feature-icon">🎯</div>
                                <div className="feature-content">
                                    <h4>Diseño Adaptable</h4>
                                    <p>Fabricado con impresión 3D para ajustarse a diferentes contextos y necesidades individuales.</p>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="feature-icon">⚡</div>
                                <div className="feature-content">
                                    <h4>Fácil de Usar</h4>
                                    <p>Se coloca como una faja ajustable en la espalda, compatible con cualquier silla de estudio o trabajo.</p>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="feature-icon">💡</div>
                                <div className="feature-content">
                                    <h4>Tecnología Integrable</h4>
                                    <p>Preparado para incorporar sensores que monitoreen la postura y envíen recordatorios personalizados.</p>
                                </div>
                            </div>

                            <div className="feature">
                                <div className="feature-icon">♻️</div>
                                <div className="feature-content">
                                    <h4>Sostenible y Modular</h4>
                                    <p>Piezas reemplazables e imprimibles, reduciendo desperdicios y permitiendo actualizaciones.</p>
                                </div>
                            </div>

                            {/* Usa Link para rutas internas de React */}
                            <Link className="btn primary" to="/semana04">Explorar el Proceso Completo</Link>
                        </div>
                    </div>
                </section>

                {/* METODOLOGÍA */}
                <section className="methodology-section">
                    <div className="section-header">
                        <span className="section-number">03</span>
                        <h2>Metodología Design Thinking</h2>
                        <p className="section-subtitle">
                            Cinco fases que nos llevaron de la empatía a la solución
                        </p>
                    </div>

                    <div className="phases-grid">
                        <div className="phase-card">
                            <div className="phase-number">1</div>
                            <h3>Empatizar</h3>
                            <p>Entrevistas con usuarios para comprender sus dolores y necesidades reales.</p>
                        </div>

                        <div className="phase-card">
                            <div className="phase-number">2</div>
                            <h3>Definir</h3>
                            <p>Análisis de causas y consecuencias para formular el problema central.</p>
                        </div>

                        <div className="phase-card">
                            <div className="phase-number">3</div>
                            <h3>Idear</h3>
                            <p>Generación creativa de soluciones mediante lluvia de ideas y votación.</p>
                        </div>

                        <div className="phase-card">
                            <div className="phase-number">4</div>
                            <h3>Prototipar</h3>
                            <p>Modelado 3D e impresión del primer prototipo funcional.</p>
                        </div>

                        <div className="phase-card">
                            <div className="phase-number">5</div>
                            <h3>Evaluar</h3>
                            <p>Validación con usuarios reales y mejoras basadas en retroalimentación.</p>
                        </div>
                    </div>

                    <div className="cta-box">
                        <h3>¿Quieres ver el desarrollo completo?</h3>
                        <p>Explora cada fase del proyecto, desde las entrevistas iniciales hasta el prototipo final.</p>
                        <Link className="btn primary" to="/semana04">Ver Proyecto Detallado</Link>
                    </div>
                </section>

                {/* IMPACTO */}
                <section className="impact-section">
                    <div className="section-header centered">
                        <span className="section-number">04</span>
                        <h2>Impacto Social</h2>
                        <p className="section-subtitle">
                            Más que un producto, una solución que transforma vidas
                        </p>
                    </div>

                    <div className="impact-content">
                        <p className="impact-text">
                            Creemos que <strong>Espaldar Ultra</strong> puede generar un impacto social positivo al 
                            fomentar hábitos posturales saludables entre estudiantes y trabajadores. Al reducir dolores 
                            musculares y prevenir lesiones, ayudamos a mejorar el bienestar físico y el rendimiento 
                            académico o laboral.
                        </p>
                        <p className="impact-text">
                            Como solución personalizable y accesible, promovemos mayor conciencia sobre la importancia 
                            del autocuidado y la ergonomía, contribuyendo a una cultura de salud preventiva en entornos 
                            educativos y profesionales.
                        </p>
                    </div>
                </section>

                {/* EQUIPO */}
                <section className="team-section" id="equipo">
                    <div className="section-header centered">
                        <span className="section-number">05</span>
                        <h2>Nuestro Equipo</h2>
                        <p className="section-subtitle">
                            Conoce a las personas detrás de Espaldar Ultra
                        </p>
                    </div>

                    <div className="team-grid">
                        <a href="https://www.linkedin.com/in/carlos-mendoza-2b722836a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener" className="team-card">
                            <div className="team-avatar">
                                <span>M</span>
                            </div>
                            <h3>Mendoza Ca</h3>
                            <p className="team-role">Desarrollador Principal</p>
                            <span className="linkedin-icon">in</span>
                        </a>

                        <a href="https://www.linkedin.com/in/betuel-jesus-arones-silva-671ab3303/" target="_blank" rel="noopener" className="team-card">
                            <div className="team-avatar">
                                <span>AJ</span>
                            </div>
                            <h3>Aronés </h3>
                            <p className="team-role">Diseño, documentación y desarrollo de web</p>
                            <span className="linkedin-icon">in</span>
                        </a>

                        <a href="https://www.linkedin.com/in/milagros-ramos-a8676231a/" target="_blank" rel="noopener" className="team-card">
                            <div className="team-avatar">
                                <span>R</span>
                            </div>
                            <h3>Rams </h3>
                            <p className="team-role">Investigación UX</p>
                            <span className="linkedin-icon">in</span>
                        </a>

                        <a href="https://www.linkedin.com/in/mayela-milagros-ticona-mamani-a47425366/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener" className="team-card">
                            <div className="team-avatar">
                                <span>T</span>
                            </div>
                            <h3>Tica </h3>
                            <p className="team-role">Prototipado 3D</p>
                            <span className="linkedin-icon">in</span>
                        </a>

                        <a href="https://www.linkedin.com/in/david-noe-carhuaz-vica%C3%B1a-9a001b219/" target="_blank" rel="noopener" className="team-card">
                            <div className="team-avatar">
                                <span>C</span>
                            </div>
                            <h3>Card </h3>
                            <p className="team-role">Impresión Laser - 3D</p>
                            <span className="linkedin-icon">in</span>
                        </a>
                    </div>

                    <p className="team-note">Haz clic en cada miembro para ver su perfil de LinkedIn</p>
                </section>
            </main>
        </>
    );
};

export default Inicio;