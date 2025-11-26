
import '../css/semana10.css';
import s7 from '../img/s7.jpg';
import s1 from '../img/s1.jpg'; 
import s2 from '../img/s2.jpg';
import s3 from '../img/s3.jpg';
import s4 from '../img/s4.jpg';
import s5 from '../img/s5.jpg';
import s6 from '../img/s6.jpg';
import heroImg from '../img/hero.jpg';

import s8 from '../media/s8.mp4';
import fabricacionProcesoWebm from '../img/fabricacion-proceso.png'; 

const Semana10 = () => {
    return (
        
        <main className="container">
           <section className="fabricacion-hero">
                <div
                    className="fabricacion-hero-bg"
                    style={{ '--hero': `url(${heroImg})` }}
                ></div>
                <div className="fabricacion-hero-layer"></div>
                <div className="fabricacion-hero-content container">
                    <span className="badge">Semana 10</span>
                    <h1>Fabricación <span className="gradient-text">Digital</span></h1>
                    <p className="lead">
                        Documentación completa del proceso de manufactura del Espaldar Ultra utilizando
                        tecnologías de impresión 3D y corte láser.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">5</span>
                            <span className="stat-label">Piezas Fabricadas</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">23h</span>
                            <span className="stat-label">Tiempo Total</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2</span>
                            <span className="stat-label">Tecnologías</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introducción */}
            <section className="fabricacion-intro card">
                <div className="fab-header">
                    <span className="fab-badge">Fabricación Digital</span>
                    <h3>Proceso de Manufactura</h3>
                </div>
                <p>
                    En esta sección documentamos el proceso completo de fabricación del Espaldar Ultra,
                    utilizando tecnologías de impresión 3D y corte láser para crear un producto ergonómico
                    y personalizable.
                </p>
            </section>

            {/* VIDEO PRINCIPAL */}
            <section className="fabricacion-activity">
                <div className="activity-header">
                    <span className="activity-number">VIDEO</span>
                    <h3>Proceso de Fabricación</h3>
                </div>
                <div className="activity-content card">
                    <p className="activity-description">
                        Observa el proceso completo de fabricación, desde el diseño digital hasta el producto final.
                    </p>

                    <div className="video-container">
                        {/* SE USA LA VARIABLE 's7' */}
                        <video controls poster={s7} width="400" height="500">
                            {/* SE USA LA VARIABLE 's8' */}
                            <source src={s8} type="video/mp4" />
                            {/* SE USA LA VARIABLE 'fabricacionProcesoWebm' */}
                       	    <source src={fabricacionProcesoWebm} type="video/webm" /> 
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <p className="video-caption">Video del proceso de fabricación del Espaldar Ultra</p>
                    </div>
                </div>
            </section>

            {/* GALERÍA DE IMÁGENES */}
            <section className="fabricacion-activity">
                <div className="activity-header">
                    <span className="activity-number">GALERÍA</span>
                    <h3>Etapas de Fabricación</h3>
                </div>
                <div className="activity-content card">
                    <p className="activity-description">
                        Explora las diferentes etapas del proceso de fabricación a través de estas imágenes detalladas.
                    </p>

                    <div className="image-gallery">
                        {/* Imagen 1: SE USA LA VARIABLE 's1' */}
                        <figure className="gallery-item">
                            <img src={s1} alt="Diseño digital en software 3D" />
                            <figcaption>
                                <span className="caption-number">01</span>
                                <span className="caption-text">Diseño digital en software CAD</span>
                            </figcaption>
                        </figure>

                        {/* Imagen 2: SE USA LA VARIABLE 's2' */}
                        <figure className="gallery-item">
                            <img src={s2} alt="Modelado 3D del espaldar" />
                            <figcaption>
                                <span className="caption-number">02</span>
                                <span className="caption-text">Modelado 3D de las piezas estructurales</span>
                            </figcaption>
                        </figure>

                        {/* Imagen 3: SE USA LA VARIABLE 's3' */}
                        <figure className="gallery-item">
                            <img src={s3} alt="Preparación en software de impresión" />
                            <figcaption>
                                <span className="caption-number">03</span>
                                <span className="caption-text">Slicing y configuración de parámetros</span>
                            </figcaption>
                        </figure>

                        {/* Imagen 4: SE USA LA VARIABLE 's4' */}
                        <figure className="gallery-item">
                            <img src={s4} alt="Impresión 3D en proceso" />
                            <figcaption>
                                <span className="caption-number">04</span>
                                <span className="caption-text">Impresión 3D de componentes principales</span>
                            </figcaption>
                        </figure>

                        {/* Imagen 5: SE USA LA VARIABLE 's5' */}
                        <figure className="gallery-item">
                            <img src={s5} alt="Corte láser de piezas" />
                            <figcaption>
                                <span className="caption-number">05</span>
                                <span className="caption-text">Corte láser de piezas complementarias</span>
                            </figcaption>
                        </figure>

                        {/* Imagen 6: SE USA LA VARIABLE 's6' */}
                        <figure className="gallery-item">
                            <img src={s6} alt="Ensamblaje de componentes" />
                            <figcaption>
                                <span className="caption-number">06</span>
                                <span className="caption-text">Ensamblaje y ajuste de piezas</span>
                            </figcaption>
                        </figure>

                        {/* Imagen 7: SE USA LA VARIABLE 's7' */}
                        <figure className="gallery-item">
                            <img src={s7} alt="Producto terminado" />
                            <figcaption>
                                <span className="caption-number">07</span>
                                <span className="caption-text">Producto final ensamblado y funcional</span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            {/* TABLA DE PIEZAS */}
            <section className="fabricacion-activity">
                <div className="activity-header">
                    <span className="activity-number">ACTIVIDAD 1</span>
                    <h3>Piezas y Componentes</h3>
                </div>
                <div className="activity-content card">
                    <p className="activity-description">
                        Listado completo de las piezas fabricadas con sus especificaciones técnicas y método de manufactura.
                    </p>

                    <div className="pieces-table-wrapper">
                        <table className="pieces-table">
                            <thead>
                                <tr>
                                    <th>Pieza</th>
                                    <th>Material</th>
                                    <th>Dimensiones</th>
                                    <th>Método</th>
                                    <th>Tiempo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Estructura principal</td>
                                    <td>PLA</td>
                                    <td>200 x 150 x 50 mm</td>
                                    <td><span className="badge-3d">Impresión 3D</span></td>
                                    <td>4h 30min</td>
                                </tr>
                                <tr>
                                    <td>Soporte lumbar</td>
                                    <td>PLA flexible</td>
                                    <td>180 x 120 x 30 mm</td>
                                    <td><span className="badge-3d">Impresión 3D</span></td>
                                    <td>3h 15min</td>
                                </tr>
                                <tr>
                                    <td>Base de ajuste</td>
                                    <td>Acrílico 3mm</td>
                                    <td>150 x 100 mm</td>
                                    <td><span className="badge-laser">Corte Láser</span></td>
                                    <td>15min</td>
                                </tr>
                                <tr>
                                    <td>Sistema de correas</td>
                                    <td>PLA</td>
                                    <td>100 x 40 x 20 mm</td>
                                    <td><span className="badge-3d">Impresión 3D</span></td>
                                    <td>2h 00min</td>
                                </tr>
                                <tr>
                                    <td>Conectores laterales</td>
                                    <td>PLA</td>
                                    <td>80 x 40 x 25 mm (x2)</td>
                                    <td><span className="badge-3d">Impresión 3D</span></td>
                                    <td>1h 30min</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* TIMELINE DE FABRICACIÓN */}
            <section className="fabricacion-timeline card">
                <h3>Línea de Tiempo del Proceso</h3>
                <div className="timeline-steps">
                    <div className="fab-step">
                        <span className="step-number">1</span>
                        <h4>Diseño CAD</h4>
                        <p>Modelado digital</p>
                        <span className="step-time">2 días</span>
                    </div>
                    <span className="step-arrow">→</span>
                    <div className="fab-step">
                        <span className="step-number">2</span>
                        <h4>Preparación</h4>
                        <p>Slicing y ajustes</p>
                        <span className="step-time">4 horas</span>
                    </div>
                    <span className="step-arrow">→</span>
                    <div className="fab-step">
                        <span className="step-number">3</span>
                        <h4>Fabricación</h4>
                        <p>Impresión 3D</p>
                        <span className="step-time">12 horas</span>
                    </div>
                    <span className="step-arrow">→</span>
                    <div className="fab-step">
                        <span className="step-number">4</span>
                        <h4>Post-proceso</h4>
                        <p>Acabado y lijado</p>
                        <span className="step-time">3 horas</span>
                    </div>
                    <span className="step-arrow">→</span>
                    <div className="fab-step">
                        <span className="step-number">5</span>
                        <h4>Ensamblaje</h4>
                        <p>Montaje final</p>
                        <span className="step-time">2 horas</span>
                    </div>
                </div>
            </section>

            {/* ROLES DEL EQUIPO */}
            <section className="fabricacion-activity">
                <div className="activity-header">
                    <span className="activity-number">EQUIPO</span>
                    <h3>Roles y Responsabilidades</h3>
                </div>
                <div className="activity-content card">
                    <p className="activity-description">
                        Distribución de tareas y responsabilidades de cada miembro del equipo en el proceso de fabricación digital.
                    </p>

                    <div className="roles-grid">
                        {/* Rol 1: Diseño CAD */}
                        <div className="role-card">
                            <div className="role-header">
                                <span className="role-icon">💻</span>
                                <h4>Diseño CAD y Modelado 3D</h4>
                            </div>
                            <div className="role-member">
                                <strong>Mendoza Calderon Juan</strong>
                            </div>
                            <div className="role-responsibilities">
                                <h5>Responsabilidades:</h5>
                                <ul>
                                    <li>Modelado 3D de todas las piezas estructurales</li>
                                    <li>Optimización de geometrías para impresión</li>
                                    <li>Documentación técnica de diseños</li>
                                    <li>Ajustes dimensionales basados en pruebas</li>
                                </ul>
                            </div>
                            <div className="role-tools">
                                <span className="tool-badge">Fusion 360</span>
                                <span className="tool-badge">SolidWorks</span>
                                <span className="tool-badge">Tinkercad</span>
                            </div>
                        </div>

                        {/* Rol 2: Preparación e Impresión */}
                        <div className="role-card">
                            <div className="role-header">
                                <span className="role-icon">🖨️</span>
                                <h4>Preparación e Impresión 3D</h4>
                            </div>
                            <div className="role-member">
                                <strong>Carhuaz Vicaña David</strong>
                            </div>
                            <div className="role-responsibilities">
                                <h5>Responsabilidades:</h5>
                                <ul>
                                    <li>Configuración de parámetros de impresión</li>
                                    <li>Slicing y optimización de soportes</li>
                                    <li>Supervisión del proceso de impresión</li>
                                    <li>Control de calidad de piezas impresas</li>
                                </ul>
                            </div>
                            <div className="role-tools">
                                <span className="tool-badge">Cura</span>
                                <span className="tool-badge">PrusaSlicer</span>
                                <span className="tool-badge">Simplify3D</span>
                            </div>
                        </div>

                        {/* Rol 3: Corte Láser */}
                        <div className="role-card">
                            <div className="role-header">
                                <span className="role-icon">⚡</span>
                                <h4>Corte Láser y Vectorización</h4>
                            </div>
                            <div className="role-member">
                                <strong>Tica</strong>
                            </div>
                            <div className="role-responsibilities">
                                <h5>Responsabilidades:</h5>
                                <ul>
                                    <li>Diseño vectorial de piezas complementarias</li>
                                    <li>Configuración de parámetros de corte láser</li>
                                    <li>Operación de cortadora láser</li>
                                    <li>Acabado y lijado de piezas cortadas</li>
                                </ul>
                            </div>
                            <div className="role-tools">
                                <span className="tool-badge">Illustrator</span>
                                <span className="tool-badge">LaserCut</span>
                                <span className="tool-badge">Inkscape</span>
                            </div>
                        </div>

                        {/* Rol 4: Ensamblaje y Pruebas */}
                        <div className="role-card">
                            <div className="role-header">
                                <span className="role-icon">🔧</span>
                                <h4>Ensamblaje y Testing</h4>
                            </div>
                            <div className="role-member">
                                <strong>asd</strong>
                            </div>
                            <div className="role-responsibilities">
                                <h5>Responsabilidades:</h5>
                                <ul>
                                    <li>Ensamblaje de componentes fabricados</li>
                                    <li>Pruebas de funcionalidad y resistencia</li>
                                    <li>Ajustes y mejoras post-fabricación</li>
                                    <li>Documentación fotográfica del proceso</li>
                                </ul>
                            </div>
                            <div className="role-tools">
                                <span className="tool-badge">Herramientas manuales</span>
                                <span className="tool-badge">Calibradores</span>
                            </div>
                        </div>

                        {/* Rol 5: Documentación */}
                        <div className="role-card">
                            <div className="role-header">
                                <span className="role-icon">📝</span>
                                <h4>Documentación y Control</h4>
                            </div>
                            <div className="role-member">
                                <strong>Ramos Chamorro Milagros</strong>
                            </div>
                            <div className="role-responsibilities">
                                <h5>Responsabilidades:</h5>
                                <ul>
                                    <li>Registro detallado del proceso de fabricación</li>
                                    <li>Gestión de tiempos y recursos</li>
                                    <li>Evaluación de resultados y mejoras</li>
                                    <li>Preparación de informes técnicos</li>
                                </ul>
                            </div>
                            <div className="role-tools">
                                <span className="tool-badge">Google Docs</span>
                                <span className="tool-badge">Trello</span>
                                <span className="tool-badge">Notion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Semana10;