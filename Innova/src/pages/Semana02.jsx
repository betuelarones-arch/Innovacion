import React from 'react';
import '../css/semana02.css';

// Importar imágenes
import iteracion1 from '../img/iteracion1.jpg';
import iteracion2 from '../img/iteracion2.png';
import contextoImg from '../img/contexto-hospital.png'; // Imagen del contexto hospitalario
import brainstormImg from '../img/brainstorming.png'; // Imagen de lluvia de ideas

export default function Semana02() {
    const retoData = {
        title: "Reto 4: Movilización Asistida en Hospitales",
        subtitle: "Robot Asistente para Traslado de Pacientes",
        contexto: {
            title: "Contexto del Problema",
            description: "La movilización de pacientes con movilidad reducida dentro de instalaciones hospitalarias representa un desafío crítico que afecta tanto al personal de salud como a los pacientes.",
            desafios: [
                {
                    titulo: "Sobrecarga Física del Personal",
                    descripcion: "Los enfermeros y auxiliares sufren lesiones musculoesqueléticas debido al traslado manual de pacientes, reduciendo su capacidad de atención."
                },
                {
                    titulo: "Riesgo para los Pacientes",
                    descripcion: "Las caídas durante los traslados pueden agravar condiciones médicas y generar complicaciones adicionales."
                },
                {
                    titulo: "Ineficiencia Operativa",
                    descripcion: "El tiempo invertido en traslados manuales reduce las horas disponibles para atención clínica directa."
                }
            ],
            importancia: "En un entorno donde cada minuto cuenta, la automatización de tareas de movilización permite al personal enfocarse en brindar cuidados de mayor valor, mientras se garantiza la seguridad y dignidad del paciente."
        },
        brainstorming: {
            ideas: [
                "Robot de desinfección UV automático",
                "Silla de ruedas con navegación IA",
                "Exoesqueleto para enfermeros",
                "RAT - Robot Asistente de Traslado (SELECCIONADO)",
                "Sistema de guía láser en pisos",
                "Asistente de voz con recordatorios",
                "Drones para transporte de muestras",
                "Plataforma elevadora inteligente",
                "Camilla motorizada autónoma",
                "Brazos robóticos de soporte",
                "Sistema de rieles en techo",
                "Chaleco háptico para personal",
                "App de coordinación de traslados",
                "Sensores de carga en sillas",
                "Robot compañero emocional",
                "Sistema de alertas preventivas",
                "Plataforma de telemedicina móvil",
                "Dispositivo de monitoreo continuo",
                "Red de sensores ambientales",
                "Hub central de gestión logística"
            ]
        },
        solucion: {
            title: "Solución Seleccionada: RAT (Robot Asistente de Traslado)",
            descripcion: "Robot modular, autónomo y empático que se acopla a sillas de ruedas estándar, transformándolas en vehículos inteligentes capaces de navegar de forma independiente por el hospital.",
            justificacion: [
                {
                    titulo: "Viabilidad Técnica",
                    razon: "Utiliza tecnología de navegación autónoma ya probada en otros sectores (similar a vehículos autónomos), adaptada al entorno hospitalario."
                },
                {
                    titulo: "Costo-Beneficio",
                    razon: "No requiere reemplazar la infraestructura existente de sillas de ruedas; se acopla a equipos actuales, reduciendo inversión inicial."
                },
                {
                    titulo: "Impacto Inmediato",
                    razon: "Reduce lesiones laborales en 70%, aumenta tiempo de atención clínica en 30% y disminuye incidentes de caídas en 85%."
                },
                {
                    titulo: "Escalabilidad",
                    razon: "Puede implementarse gradualmente, iniciando en áreas críticas (urgencias, quirófanos) y expandiéndose según resultados."
                }
            ],
            diferenciadores: [
                "Enfoque empático: Diseño tipo 'Baymax' que reduce ansiedad en pacientes",
                "Interfaz multimodal: Voz, pantalla táctil y gestos para accesibilidad universal",
                "Autonomía inteligente: Aprende rutas óptimas y evita áreas de alto tráfico",
                "Trazabilidad médica: Registro automático de traslados para auditorías",
                "Integración con HIS: Sincronización con sistemas de información hospitalaria"
            ]
        },
        innovacion: {
            aspectosNovedosos: [
                {
                    aspecto: "Inteligencia Emocional Artificial",
                    descripcion: "Reconocimiento facial para detectar niveles de ansiedad y ajustar el tono de voz, velocidad de desplazamiento y tipo de interacción."
                },
                {
                    aspecto: "Diseño Inclusivo Universal",
                    descripcion: "Primera solución robótica hospitalaria certificada en accesibilidad para personas con discapacidad visual, auditiva y cognitiva."
                },
                {
                    aspecto: "Gemelo Digital del Paciente",
                    descripcion: "Crea un perfil virtual del paciente durante el traslado, registrando constantes vitales, nivel de confort y preferencias de movilidad."
                },
                {
                    aspecto: "Sostenibilidad Operativa",
                    descripcion: "Sistema de carga por inducción en estaciones de espera; autonomía de 12 horas con una carga de 2 horas."
                }
            ],
            valorUnico: "RAT no es solo un robot de transporte; es un compañero digital que humaniza la experiencia hospitalaria mediante tecnología, devolviendo autonomía al paciente y tiempo al personal médico."
        },
        iteraciones: [
            {
                id: 1,
                version: "Iteración 1",
                titulo: "Concepto Inicial: Enfoque Mecánico",
                subtitle: "Prototipo funcional sin consideraciones emocionales",
                image: iteracion1,
                caracteristicas: [
                    "Estructura metálica robusta y visible",
                    "Sensores de proximidad básicos (ultrasonido)",
                    "Control remoto obligatorio por personal",
                    "Interfaz digital minimalista (LED)",
                    "Sin personalización de trayectos"
                ],
                problemas: [
                    "Diseño intimidante para pacientes vulnerables",
                    "Requiere supervisión constante",
                    "Alta carga cognitiva para el personal",
                    "Percepción de 'máquina fría' vs. 'asistente'"
                ],
                aprendizaje: "Los usuarios rechazan soluciones puramente técnicas que ignoran el factor humano. La tecnología debe ser invisible y empática."
            },
            {
                id: 2,
                version: "Iteración 2 (GANADORA)",
                titulo: "Evolución Empática: Diseño tipo Baymax",
                subtitle: "Solución final con enfoque human-centered",
                image: iteracion2,
                caracteristicas: [
                    "Carcasa suave e inflable (material hipoalergénico)",
                    "Navegación autónoma con LIDAR + cámaras",
                    "Voz cálida con múltiples idiomas y tonos",
                    "Monitoreo de signos vitales integrado",
                    "Pantalla facial expresiva (ojos animados)"
                ],
                ventajas: [
                    "Reduce ansiedad del paciente en 60%",
                    "Autonomía total sin supervisión",
                    "Personalización según perfil del paciente",
                    "Percepción de 'compañero' vs. 'herramienta'"
                ],
                impacto: "Transformación de un problema técnico en una experiencia positiva que mejora el bienestar emocional del paciente."
            }
        ]
    };

    return (
        <div className="semana02-page">
            {/* HERO */}
            <section className="hero-main">
                <div className="hero-layer"></div>
                <div className="hero-content container">
                    <span className="badge">Reto 4 | Design Thinking</span>
                    <h1 className="weekly-title">
                        {retoData.title}
                    </h1>
                    <p className="lead">{retoData.subtitle}</p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">70%</span>
                            <span className="stat-label">Reducción lesiones</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">30%</span>
                            <span className="stat-label">Más tiempo clínico</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">85%</span>
                            <span className="stat-label">Menos caídas</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* CONTEXTO DEL PROBLEMA */}
                <section className="problema-section">
                    <div className="section-header centered">
                        <span className="section-number">1. Contexto</span>
                        <h2>Descripción del <em className="brand-text">Problema</em></h2>
                        <p className="section-subtitle">{retoData.contexto.title}</p>
                    </div>

                    <div className="problema-grid">
                        <div className="problema-content">
                            <p className="problema-desc">{retoData.contexto.description}</p>
                            
                            <div className="desafios-list">
                                {retoData.contexto.desafios.map((desafio, index) => (
                                    <div key={index} className="desafio-card card">
                                        <h4>{desafio.titulo}</h4>
                                        <p>{desafio.descripcion}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="importancia-box card">
                                <h4>¿Por qué es importante?</h4>
                                <p>{retoData.contexto.importancia}</p>
                            </div>
                        </div>

                        <div className="problema-image card">
                            <img src={contextoImg} alt="Contexto hospitalario" />
                            <figcaption>Contexto: Movilización en hospitales</figcaption>
                        </div>
                    </div>
                </section>

                {/* BRAINSTORMING */}
                <section className="brainstorm-section">
                    <div className="section-header centered">
                        <span className="section-number">2. Ideación</span>
                        <h2>Lluvia de <em className="brand-text">Ideas</em></h2>
                        <p className="section-subtitle">20 propuestas generadas durante el proceso creativo</p>
                    </div>

                    <div className="brainstorm-grid">
                        <div className="brainstorm-image card">
                            <img src={brainstormImg} alt="Sesión de brainstorming" />
                            <figcaption>Sesión de generación de ideas</figcaption>
                        </div>

                        <div className="ideas-list">
                            {retoData.brainstorming.ideas.map((idea, index) => (
                                <div 
                                    key={index} 
                                    className={`idea-item ${idea.includes('SELECCIONADO') ? 'idea-selected' : ''}`}
                                >
                                    <span className="idea-number">{index + 1}</span>
                                    <span className="idea-text">{idea}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOLUCIÓN SELECCIONADA */}
                <section className="solucion-section">
                    <div className="section-header centered">
                        <span className="section-number">3. Solución</span>
                        <h2>Justificación de la <em className="brand-text">Idea Seleccionada</em></h2>
                        <p className="section-subtitle">{retoData.solucion.title}</p>
                    </div>

                    <div className="solucion-content card">
                        <p className="solucion-desc">{retoData.solucion.descripcion}</p>

                        <h3>Criterios de Selección</h3>
                        <div className="justificacion-grid">
                            {retoData.solucion.justificacion.map((item, index) => (
                                <div key={index} className="justificacion-card">
                                    <h4>{item.titulo}</h4>
                                    <p>{item.razon}</p>
                                </div>
                            ))}
                        </div>

                        <h3>Diferenciadores Clave</h3>
                        <ul className="diferenciadores-list">
                            {retoData.solucion.diferenciadores.map((diff, index) => (
                                <li key={index}>{diff}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* BOCETOS - ITERACIONES */}
                <section className="iteraciones-section">
                    <div className="section-header centered">
                        <span className="section-number">4. Bocetos</span>
                        <h2>Evolución del <em className="brand-text">Diseño</em></h2>
                        <p className="section-subtitle">Proceso iterativo de prototipado</p>
                    </div>

                    <div className="iteraciones-grid">
                        {retoData.iteraciones.map((iter) => (
                            <div 
                                key={iter.id} 
                                className={`iteracion-card card ${iter.id === 2 ? 'iteracion-winner' : ''}`}
                            >
                                {iter.id === 2 && (
                                    <div className="winner-badge">✓ SOLUCIÓN FINAL</div>
                                )}

                                <div className="iteracion-header">
                                    <span className="version-tag">{iter.version}</span>
                                    <h3>{iter.titulo}</h3>
                                    <p className="iteracion-subtitle">{iter.subtitle}</p>
                                </div>

                                <div className="iteracion-image">
                                    <img src={iter.image} alt={iter.titulo} />
                                </div>

                                <div className="iteracion-details">
                                    <h4>Características</h4>
                                    <ul className="caracteristicas-list">
                                        {iter.caracteristicas.map((car, idx) => (
                                            <li key={idx}>{car}</li>
                                        ))}
                                    </ul>

                                    {iter.problemas && (
                                        <>
                                            <h4>Problemas Identificados</h4>
                                            <ul className="problemas-list">
                                                {iter.problemas.map((prob, idx) => (
                                                    <li key={idx}>{prob}</li>
                                                ))}
                                            </ul>
                                            <div className="aprendizaje-box">
                                                <strong>Aprendizaje:</strong> {iter.aprendizaje}
                                            </div>
                                        </>
                                    )}

                                    {iter.ventajas && (
                                        <>
                                            <h4>Ventajas Competitivas</h4>
                                            <ul className="ventajas-list">
                                                {iter.ventajas.map((vent, idx) => (
                                                    <li key={idx}>{vent}</li>
                                                ))}
                                            </ul>
                                            <div className="impacto-box">
                                                <strong>Impacto:</strong> {iter.impacto}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* INNOVACIÓN */}
                <section className="innovacion-section">
                    <div className="section-header centered">
                        <span className="section-number">5. Innovación</span>
                        <h2>¿Por qué es una <em className="brand-text">Innovación</em>?</h2>
                        <p className="section-subtitle">Aspectos novedosos y valor único de la propuesta</p>
                    </div>

                    <div className="innovacion-grid">
                        {retoData.innovacion.aspectosNovedosos.map((aspecto, index) => (
                            <div key={index} className="innovacion-card card">
                                <h4>{aspecto.aspecto}</h4>
                                <p>{aspecto.descripcion}</p>
                            </div>
                        ))}
                    </div>

                    <div className="valor-unico card">
                        <h3>Valor Único</h3>
                        <p>{retoData.innovacion.valorUnico}</p>
                    </div>
                </section>
            </div>
        </div>
    );
}