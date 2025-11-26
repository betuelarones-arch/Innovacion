// Importa las imágenes y el video necesarios para el componente.
import '../css/semana06.css';
import heroImg from '../img/hero.jpg';
import tablasImg from '../img/tablas.png';
import posturaImg from '../img/postura.png';
import misioImg from '../img/misio.png';
import malImg from '../img/mal.png';
import malaposturaImg from '../img/malapostura.png';
import cerebroImg from '../img/cerebro.png';
import lluvia1Img from '../img/Lluvia1.png';
import lluvia2Img from '../img/Lluvia2.png';
import tinkerImg from '../img/tinker.png';
import impreso1Img from '../img/3.jpeg';
import impreso2Img from '../img/1.jpeg';
import impreso3Img from '../img/2.jpeg';
import ejemploImg from '../img/ejemplo.png';
import failed1Img from '../img/Failed1.jpg';
import failed2Img from '../img/failed2.jpg';
import evaluarImg from '../img/evaluar.png';
import resultImg from '../img/result.png';
import entrevistaVideo from '../media/entrevista.mp4';

const Semana04 = () => {
    return (
        <>
            {/* HERO: (Correcto como estaba) */}
            <section className="hero">
                <div
                    className="hero-bg"
                    style={{ '--hero': `url(${heroImg})` }}
                ></div>
                <div className="hero-layer"></div>
                <div className="hero-content container">
                    <span className="badge">Design Thinking</span>
                    <h1>Espaldar <span>Ultra</span></h1>
                    <p className="lead">
                        Comfort inteligente para quienes pasan horas sentados estudiando o
                        trabajando.
                    </p>
                    <div className="cta">
                        <a className="btn primary" href="#empatizar">Ver Fase 1</a>
                        <a className="btn ghost" href="#idear">Explorar Ideación</a>
                    </div>
                </div>
            </section>

            {/* ================= FASE 1: EMPATIZAR (CORREGIDO) ================= */}
            <section className="dt-section" id="empatizar">
                <div className="container"> {/* Contenedor para centrado y padding */}
                    <header className="section-title">
                        <h2>Fase 1: <em>Empatizar</em></h2>
                        <p className="section-subtitle">
                            Comprender los problemas reales que enfrentan las personas que pasan
                            varias horas sentadas.
                        </p>
                    </header>

                    <div className="grid-2">
                        {/* Columna izquierda: imágenes */}
                        <div className="column media-col">
                            <figure className="card media">
                                <img
                                    src={tablasImg}
                                    alt="Horas sentados por entrevistado (rango diario)"
                                    loading="lazy"
                                />
                                <figcaption>
                                    Horas sentados por entrevistado (máx/mín diarios)
                                </figcaption>
                            </figure>

                            <figure className="card media">
                                <img
                                    src={posturaImg}
                                    alt="Comparación de postura adecuada vs. inadecuada"
                                    loading="lazy"
                                />
                                <figcaption>Postura adecuada vs. inadecuada</figcaption>
                            </figure>
                        </div>

                        {/* Columna derecha: contenido */}
                        <div className="column text-col">
                            <article className="card content">
                                <h3>Objetivo</h3>
                                <p>
                                    Comprender los problemas que enfrentan las personas que pasan
                                    varias horas sentadas en un entorno de trabajo o estudio, para
                                    diseñar una solución útil, cómoda y alcanzable.
                                </p>

                                <h3>Hallazgos principales</h3>
                                <ul className="checks">
                                    <li>
                                        <strong>Horas sentados:</strong> entre <b>4</b> y
                                        <b>8 horas</b> diarias en escritorio o computadora.
                                    </li>
                                    <li>
                                        <strong>Entorno:</strong> contexto académico y laboral en la
                                        mayoría de casos.
                                    </li>
                                    <li>
                                        <strong>Percepción:</strong> no consideran adecuada su postura
                                        actual.
                                    </li>
                                    <li>
                                        <strong>Molestias comunes:</strong> dolor en zona lumbar, cuello
                                        y espalda tras largas jornadas.
                                    </li>
                                    <li>
                                        <strong>Acceso al producto:</strong> no usan una silla o soporte
                                        especial para mitigar molestias.
                                    </li>
                                </ul>

                                <div className="highlight">
                                    <p>
                                        <strong>Insight:</strong> las personas buscan alivio sin
                                        complicar su rutina: algo
                                        <em>fácil de usar, portátil y ergonómico</em>.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* ===== VIDEO ENCUESTA ===== */}
                    <header className="section-title" id="encuesta">
                        <h2>Encuesta a <em>Usuarios</em></h2>
                        <p className="section-subtitle">
                            Evidencia del proceso de investigación con usuarios reales
                        </p>
                    </header>
                    
                    {/* Clase 'video-container' ya tiene el estilo de card en el CSS anterior */}
                    <div className="video-container card"> 
                        <div className="video-wrapper">
                            <video controls>
                                <source src={entrevistaVideo} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>

                        <div className="video-info">
                            <h3>Metodología de Investigación</h3>
                            <p>
                                Realizamos entrevistas estructuradas con estudiantes y
                                trabajadores que pasan largas horas sentados. Este video documenta
                                el proceso de recolección de datos que fundamenta nuestro
                                proyecto.
                            </p>

                            <div className="video-stats">
                                <div className="video-stat">
                                    <span className="stat-icon">👥</span>
                                    <div>
                                        <strong>3+</strong>
                                        <span>Entrevistados</span>
                                    </div>
                                </div>

                                <div className="video-stat">
                                    <span className="stat-icon">📋</span>
                                    <div>
                                        <strong>10+</strong>
                                        <span>Preguntas</span>
                                    </div>
                                </div>

                                <div className="video-stat">
                                    <span className="stat-icon">⏱️</span>
                                    <div>
                                        <strong>2 semanas</strong>
                                        <span>Investigación</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FASE 2: DEFINIR (CORREGIDO) ================= */}
            <section className="dt-section" id="definir">
                <div className="container">
                    <header className="section-title">
                        <h2>Fase 2: <em>Definir</em></h2>
                        <p className="section-subtitle">
                            Enfocamos el problema y formulamos una solución clara a partir de lo
                            aprendido.
                        </p>
                    </header>

                    <div className="grid-3">
                        {/* Columna 1: Definir. Clase 'card' añadida para uniformidad */}
                        <article className="card content">
                            <h3>Problema central</h3>
                            <p>
                                ¿Cómo diseñar un sistema que ayude a estudiantes a
                                <strong>monitorizar y mejorar su postura</strong> y hábitos frente a
                                la computadora, integrando un
                                <strong>dispositivo tangible</strong> con un
                                <strong>software de acompañamiento</strong>?
                            </p>

                            <h4>Impactos actuales</h4>
                            <ul className="bullets">
                                <li>Dolores en espalda, cuello y zona lumbar.</li>
                                <li>Posibles lesiones si no se corrige la postura.</li>
                                <li>Fatiga que reduce el rendimiento.</li>
                            </ul>

                            <figure className="media">
                                <img
                                    src={misioImg}
                                    alt="Dificultad de acceso a soluciones por costo"
                                    loading="lazy"
                                />
                                <figcaption>
                                    Dificultad de acceso a soluciones por costo.
                                </figcaption>
                            </figure>
                        </article>

                        {/* Columna 2: Causas. Clase 'card' añadida para uniformidad */}
                        <article className="card content">
                            <h3>Causas</h3>
                            <ul className="bullets">
                                <li>Permanecer sentado entre 4 a 8 horas diarias.</li>
                                <li>Uso de sillas sin ergonomía.</li>
                                <li>Baja disciplina para mantener postura adecuada.</li>
                                <li>No encontrar soluciones accesibles.</li>
                            </ul>
                            <figure className="media">
                                <img src={malImg} alt="malapostura" loading="lazy" />
                                <figcaption>Mala postura al estar parado.</figcaption>
                            </figure>
                        </article>

                        {/* Columna 3: Consecuencias. Clase 'card' añadida para uniformidad */}
                        <article className="card content">
                            <h3>Consecuencias</h3>
                            <ul className="bullets">
                                <li>Dolor en espalda, cuello y zona lumbar.</li>
                                <li>Lesiones por hábitos posturales incorrectos.</li>
                                <li>Fatiga que afecta el rendimiento.</li>
                            </ul>

                            <figure className="media">
                                <img
                                    src={malaposturaImg}
                                    alt="Dolor lumbar por mala postura"
                                    loading="lazy"
                                />
                                <figcaption>
                                    Dolor lumbar asociado a malas posturas prolongadas.
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= FASE 3: IDEAR (CORREGIDO) ================= */}
            <section className="dt-section" id="idear">
                <div className="container">
                    <header className="section-title">
                        <h2>Fase 3: <em>Idear</em></h2>
                        <p className="section-subtitle">
                            Generamos muchas alternativas y seleccionamos las más viables según
                            impacto, facilidad y costo.
                        </p>
                    </header>

                    {/* Hero lateral: imagen + lista */}
                    <div className="grid-2 idear-hero">
                        <figure className="card media">
                            <img
                                src={cerebroImg}
                                alt="Lluvia de ideas: creatividad e innovación"
                                loading="lazy"
                            />
                            <figcaption>
                                Exploración creativa con lluvia de ideas guiada.
                            </figcaption>
                        </figure>

                        <article className="card content"> {/* 'pad' cambiado a 'content' para uniformidad */}
                            <h3>Hallazgos de la lluvia de ideas</h3>
                            <ul className="bullets">
                                <li>Mochilas con sensores para monitoreo de ergonomía.</li>
                                <li>
                                    Columna vertebral impresa en 3D (modelo didáctico/ergonómico).
                                </li>
                                <li>Sillón impreso en 3D con cojines modulables.</li>
                                <li>Espaldar que se adapta a la forma de la espalda.</li>
                                <li>Silla impresa en 3D personalizada al usuario.</li>
                                <li>App que registre horas sentado y alerte pausas.</li>
                                <li>Sensor en espaldar que detecte mala postura y notifique.</li>
                            </ul>
                        </article>
                    </div>

                    {/* Lluvia de ideas: imágenes GRANDES + zoom */}
                    <div className="grid-2 idear-photos big">
                        <figure className="card media">
                            <img
                                src={lluvia1Img}
                                alt="Primera sesión de lluvia de ideas"
                                loading="lazy"
                            />
                            <figcaption>Sesión 1: generación divergente de ideas.</figcaption>
                        </figure>
                        <figure className="card media">
                            <img
                                src={lluvia2Img}
                                alt="Segunda sesión de lluvia de ideas"
                                loading="lazy"
                            />
                            <figcaption>Sesión 2: agrupación por temas y votación.</figcaption>
                        </figure>
                    </div>

                    {/* Seleccionadas (texto) */}
                    <div className="card content idear-selected"> {/* 'pad' cambiado a 'content' para uniformidad */}
                        <h3>Ideas finalistas</h3>
                        <ul className="bullets">
                            <li>Espaldar adaptable mediante impresión 3D.</li>
                            <li>
                                Sensor que detecte malas posturas + chatbot con recordatorios de
                                pausas/estiramientos.
                            </li>
                            <li>
                                Sistema tipo origami con pliegues móviles para soporte dinámico.
                            </li>
                            <li>
                                Micro-ajustes neumáticos por zonas (colchón inteligente para la
                                espalda).
                            </li>
                        </ul>
                    </div>

                    {/* Tablero de post-its */}
                    <div className="ideas-board">
                        <div className="ideas-grid">
                            {/* Los post-its (usando div o article) */}
                            <article className="sticky lavender">
                                Espaldar modular intercambiable (piezas 3D según actividad).
                            </article>
                            <article className="sticky peach">
                                Micro-ajustes neumáticos por zonas específicas.
                            </article>
                            <article className="sticky lilac">
                                Escaneo corporal 3D para curvaturas y puntos de presión.
                            </article>
                            <article className="sticky mint">
                                Espaldar “esquelético” similar a columna; se adapta con 3D.
                            </article>
                            <article className="sticky aqua">
                                App móvil con alertas de pausa y ejercicios rápidos.
                            </article>
                            <article className="sticky sand">
                                Sensor de postura con detección de inclinación y vibración.
                            </article>
                            <article className="sticky berry">
                                Fundas/cojines intercambiables con distintos niveles de soporte.
                            </article>
                            <article className="sticky lime">
                                Respaldo adaptable para gamers con soporte lumbar extra.
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FASE 4: PROTOTIPAR (CORREGIDO) ================= */}
            <section className="dt-section" id="prototipar">
                <div className="container">
                    <header className="section-title">
                        <h2>Fase 4: <em>Prototipar</em></h2>
                        <p className="section-subtitle">
                            Vemos el prototipo (Tinkercad), la impresión física y el aspecto del
                            producto final.
                        </p>
                    </header>

                    {/* Hero del prototipo: Tinkercad + texto */}
                    <div className="grid-2 proto-hero">
                        <figure className="card media">
                            <img
                                src={tinkerImg}
                                alt="Prototipo en Tinkercad"
                                loading="lazy"
                            />
                            <figcaption>Vista del prototipo en Tinkercad.</figcaption>
                        </figure>

                        <article className="card content"> {/* 'pad' cambiado a 'content' para uniformidad */}
                            <h3>El prototipo</h3>
                            <p>
                                El usuario lo usa como una <strong>faja/espaldar</strong> que se
                                coloca en la espalda y se ajusta a su comodidad. Se modeló en 3D
                                para validar <strong>ergonomía, ajuste y modularidad</strong>.
                            </p>
                            <ul className="bullets">
                                <li>Ajuste cómodo y rápido según la contextura.</li>
                                <li>Piezas imprimibles en 3D y fáciles de reemplazar.</li>
                                <li>Compatibilidad con sensores para hábitos posturales.</li>
                            </ul>

                            {/* Botón a Tinkercad */}
                            <p style={{ marginTop: '10px' }}>
                                <a
                                    className="btn primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.tinkercad.com/"
                                >
                                    Ver en Tinkercad
                                </a>
                            </p>
                        </article>
                    </div>

                    {/* 3 fotos del prototipo impreso */}
                    <div className="proto-photos"> {/* Ya tenía 'proto-photos' con grid en el CSS */}
                        <figure className="card media">
                            <img
                                src={impreso1Img}
                                alt="Prototipo impreso - vista 1"
                                loading="lazy"
                            />
                            <figcaption>Prototipo impreso: vista 1.</figcaption>
                        </figure>

                        <figure className="card media">
                            <img
                                src={impreso2Img}
                                alt="Prototipo impreso - vista 2"
                                loading="lazy"
                            />
                            <figcaption>Prototipo impreso: vista 2.</figcaption>
                        </figure>

                        <figure className="card media">
                            <img
                                src={impreso3Img}
                                alt="Prototipo impreso - vista 3"
                                loading="lazy"
                            />
                            <figcaption>Prototipo impreso: vista 3.</figcaption>
                        </figure>
                    </div>

                    {/* 5) Foto del producto final / uso */}
                    <div className="proto-final card">
                        <figure className="media">
                            <img
                                src={ejemploImg}
                                alt="Aspecto del producto final / uso"
                                loading="lazy"
                            />
                            <figcaption>Producto final: aspecto y modo de uso.</figcaption>
                        </figure>
                    </div>

                    {/* ================= PROTOTIPOS FALLIDOS / ITERACIONES ================= */}
                    <header className="section-title" id="iteraciones">
                        <h2>Iteraciones y <em>Aprendizajes</em></h2>
                        <p className="section-subtitle">
                            El camino hacia la solución final: errores que nos enseñaron a mejorar
                        </p>
                    </header>

                    {/* Iteraciones Introducción */}
                    <div className="iterations-intro card">
                        <div className="iteration-header">
                            <span className="iteration-badge">Proceso Iterativo</span>
                            <h3>No todo salió bien a la primera</h3>
                        </div>
                        <p>
                            Como parte del proceso de Design Thinking, experimentamos con diferentes diseños
                            antes de llegar a nuestro prototipo final. Cada fallo nos enseñó lecciones
                            valiosas sobre ergonomía, materiales y usabilidad.
                        </p>
                    </div>

                    {/* Contenedor de Prototipos Fallidos */}
                    <div className="failed-prototypes">
                        {/* Prototipo Fallido 1 */}
                        <article className="failed-proto card">
                            <div className="failed-proto-header">
                                <span className="version-tag">Versión 1.0</span>
                                <span className="failed-badge">❌ Descartado</span>
                            </div>

                            <div className="failed-proto-content">
                                <div className="failed-proto-image">
                                    <img src={failed1Img} alt="Primer prototipo fallido" loading="lazy" />
                                    <div className="image-overlay">Primera iteración</div>
                                </div>

                                <div className="failed-proto-text">
                                    <h3>Diseño Rígido Completo</h3>
                                    <p className="proto-description">
                                        Nuestro primer intento fue un espaldar completamente rígido que
                                        cubría toda la espalda de manera uniforme.
                                    </p>

                                    <div className="problems">
                                        <h4>Problemas encontrados:</h4>
                                        <ul>
                                            <li><span className="problem-icon">⚠️</span> Diseño demasiado compacto para alojar placa Arduino</li>
                                            <li><span className="problem-icon">⚠️</span> Falta de espacio para sensores de postura y cableado</li>
                                            <li><span className="problem-icon">⚠️</span> Cobertura insuficiente de la zona lumbar y dorsal</li>
                                            <li><span className="problem-icon">⚠️</span> Imposible añadir batería o módulo Bluetooth</li>
                                        </ul>
                                    </div>

                                    <div className="learnings">
                                        <h4>Aprendizajes clave:</h4>
                                        <p>
                                            <strong>La rigidez no es sinónimo de soporte.</strong> Comprendimos que
                                            necesitábamos flexibilidad en ciertas zonas para permitir movimiento natural.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Prototipo Fallido 2 */}
                        <article className="failed-proto card">
                            <div className="failed-proto-header">
                                <span className="version-tag">Versión 2.0</span>
                                <span className="failed-badge">❌ Descartado</span>
                            </div>

                            <div className="failed-proto-content reverse">
                                <div className="failed-proto-text">
                                    <h3>Sistema de Correas Múltiples</h3>
                                    <p className="proto-description">
                                        Segunda iteración con un sistema complejo de correas ajustables
                                        para personalizar el soporte.
                                    </p>

                                    <div className="problems">
                                        <h4>Problemas encontrados:</h4>
                                        <ul>
                                            <li><span className="problem-icon">⚠️</span> Demasiado pesado e incómodo para uso prolongado</li>
                                            <li><span className="problem-icon">⚠️</span> No se adaptaba a diferentes contextos corporales</li>
                                            <li><span className="problem-icon">⚠️</span> Restricción excesiva del movimiento natural</li>
                                            <li><span className="problem-icon">⚠️</span> Material muy duro generaba molestias adicionales</li>
                                        </ul>
                                    </div>

                                    <div className="learnings">
                                        <h4>Aprendizajes clave:</h4>
                                        <p>
                                            <strong>La simplicidad es fundamental.</strong> Los usuarios necesitan
                                            una solución rápida y fácil de usar, no un sistema complejo de ajustes.
                                        </p>
                                    </div>
                                </div>

                                <div className="failed-proto-image">
                                    <img src={failed2Img} alt="Segundo prototipo fallido" loading="lazy" />
                                    <div className="image-overlay">Segunda iteración</div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Comparación visual: Evolución */}
                    <div className="evolution-timeline">
                        <h3>Evolución del Diseño</h3>
                        <div className="timeline-container">
                            <div className="timeline-item">
                                <div className="timeline-marker fail">1</div>
                                <div className="timeline-content">
                                    <h4>V1.0 - Rígido</h4>
                                    <p>Muy pesado e inflexible</p>
                                </div>
                            </div>

                            <div className="timeline-connector"></div>

                            <div className="timeline-item">
                                <div className="timeline-marker fail">2</div>
                                <div className="timeline-content">
                                    <h4>V2.0 - Correas</h4>
                                    <p>Complicado de usar</p>
                                </div>
                            </div>

                            <div className="timeline-connector"></div>

                            <div className="timeline-item">
                                <div className="timeline-marker success">✓</div>
                                <div className="timeline-content">
                                    <h4>V3.0 - Final</h4>
                                    <p>Solución integrada y funcional</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="iterations-conclusion card">
                        <h3>Reflexión sobre el Proceso Iterativo</h3>
                        <p>
                            Cada prototipo fallido nos acercó más a la solución final. El proceso de
                            <strong>prueba, error y aprendizaje</strong> es fundamental en el Design Thinking.
                            Sin estos fracasos, no habríamos identificado los requisitos críticos:
                            <em>simplicidad de uso, adaptabilidad, peso ligero y soporte efectivo</em>.
                        </p>

                        <div className="key-metrics">
                            <div className="metric-item">
                                <span className="metric-number">2</span>
                                <span className="metric-label">Prototipos fallidos</span>
                            </div>
                            <div className="metric-item">
                                <span className="metric-number">3</span>
                                <span className="metric-label">Versiones totales</span>
                            </div>
                            <div className="metric-item">
                                <span className="metric-number">6</span>
                                <span className="metric-label">Semanas de desarrollo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FASE 5: EVALUAR (A COMPLETAR) ================= */}
            <section className="dt-section" id="evaluar">
                <div className="container">
                    <header className="section-title">
                        <h2>Fase 5: <em>Evaluar</em></h2>
                        <p className="section-subtitle">
                            Validamos la solución final con usuarios reales para medir impacto y usabilidad.
                        </p>
                    </header>

                    {/* Aquí iría el contenido de la Fase 5: Evaluación */}
                    {/* Ejemplo de estructura para Evaluación */}
                    <div className="grid-2 eval-hero">
                        <figure className="card media">
                            <img src={evaluarImg} alt="Evaluación del prototipo final" loading="lazy" />
                            <figcaption>Pruebas de usabilidad con usuarios.</figcaption>
                        </figure>
                        <article className="card content">
                            <h3>Metodología de Evaluación</h3>
                            <p>Se realizó una prueba A/B (con y sin el espaldar) para medir la reducción de la mala postura y la percepción de confort durante una jornada de 4 horas de trabajo.</p>
                            <h4>Resultados Clave</h4>
                            <ul>
                                <li><strong>Reducción de Inclinación:</strong> X% de mejora en postura lumbar.</li>
                                <li><strong>Aumento de Confort:</strong> Los usuarios reportaron un Y% menos de fatiga.</li>
                            </ul>
                            <a href="#" className="btn ghost">Ver Resultados Detallados</a>
                        </article>
                    </div>
                    
                    {/* Puedes añadir más secciones como Before & After, Evidencia, etc. aquí */}
                    <div className="before-after">
                        <figure className="card media">
                            <span className="highlight-label">ANTES</span>
                            <img src={malaposturaImg} alt="Postura Antes de Usar" loading="lazy" />
                            <figcaption>Postura natural sin soporte.</figcaption>
                        </figure>
                        <figure className="card media">
                            <span className="highlight-label">DESPUÉS</span>
                            <img src={resultImg} alt="Postura Después de Usar" loading="lazy" />
                            <figcaption>Postura corregida con Espaldar Ultra.</figcaption>
                        </figure>
                    </div>

                </div>
            </section>

            <footer className="footer-section">
                <div className="container">
                    <p>© 2025 Espaldar Ultra - Proyecto Design Thinking</p>
                </div>
            </footer>
        </>
    );
};

export default Semana04;