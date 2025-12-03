import React from 'react';
import '../css/semana04.css';

// Importar imágenes de propuestas individuales
import propuestaM from '../img/propuestaM.jpg';
import propuestaC from '../img/propuestaC.jpg';
import propuestaT from '../img/propuestaT.jpg';
import propuestaA from '../img/propuestaA.png';
import propuestaR from '../img/propuestaR.jpg';

// Importar imágenes de tecnologías
import tinkerImg from '../img/tinkercad-logo.png';
import arduinoImg from '../img/arduino-logo.png';
import fusion360Img from '../img/fusion360-logo.png';
import reactImg from '../img/react-logo.png'; 

export default function Semana04() {
    const proyectoData = {
        titulo: "Espaldar Ultra",
        subtitulo: "Sistema Inteligente de Monitoreo Postural",
        desafio: "Salud y Bienestar: Monitoreo de hábitos posturales en estudiantes",
        
        introduccion: {
            problema: "En la era digital, estudiantes y trabajadores pasan entre 6-10 horas diarias frente a computadoras, desarrollando problemas musculoesqueléticos crónicos que afectan su calidad de vida y rendimiento académico/laboral.",
            vision: "Desarrollar un ecosistema tecnológico integrado que combine hardware inteligente, software de monitoreo y diseño ergonómico para prevenir lesiones posturales de manera proactiva.",
            alcance: "Prototipo funcional que integra sensores de postura, modelado 3D personalizable y aplicación web para seguimiento en tiempo real."
        },

        tecnologias: [
            {
                nombre: "Tinkercad",
                categoria: "Modelado 3D",
                descripcion: "Plataforma de diseño asistido por computadora (CAD) basada en navegador para crear modelos 3D paramétricos del espaldar ergonómico.",
                uso: "Diseño iterativo de la estructura física, simulación de ajustes personalizables y preparación de archivos para impresión 3D.",
                ventajas: ["Accesible desde cualquier dispositivo", "Colaboración en tiempo real", "Exportación directa a STL"],
                imagen: tinkerImg
            },
            {
                nombre: "Arduino + Sensores",
                categoria: "Hardware & IoT",
                descripcion: "Microcontrolador programable integrado con sensores de inclinación (MPU6050) y presión para detectar posturas inadecuadas.",
                uso: "Captura de datos biométricos, procesamiento en tiempo real y envío de alertas vibratorias cuando se detecta mala postura.",
                ventajas: ["Open-source y económico", "Amplia comunidad de soporte", "Fácil integración con sensores"],
                imagen: arduinoImg
            },
            {
                nombre: "Fusion 360",
                categoria: "Ingeniería CAD Avanzada",
                descripcion: "Suite profesional de diseño 3D para análisis de tensiones, simulaciones mecánicas y optimización estructural del prototipo.",
                uso: "Validación de resistencia de materiales, análisis de puntos de estrés y refinamiento del diseño antes de fabricación.",
                ventajas: ["Simulación física avanzada", "Generación automática de planos", "Compatible con manufactura"],
                imagen: fusion360Img
            },
            {
                nombre: "React + Firebase",
                categoria: "Desarrollo Web & Base de Datos",
                descripcion: "Framework JavaScript para crear una aplicación web progresiva (PWA) que visualiza estadísticas de postura y envía recordatorios.",
                uso: "Dashboard interactivo con gráficos de tiempo de uso, historial de posturas y sistema de gamificación con objetivos diarios.",
                ventajas: ["Interfaz reactiva y rápida", "Sincronización en tiempo real", "Notificaciones push"],
                imagen: reactImg
            }
        ],

        propuestasEquipo: [
            {
                id: 1,
                estudiante: "Juan Mendoza Calderon",
                rol: "Diseño Estructural",
                propuesta: "Espaldar Modular con Sensores Integrados",
                descripcion: "Sistema de soporte lumbar con módulos intercambiables que se adaptan a diferentes contexturas físicas. Integra sensores capacitivos en puntos clave para detectar presión desigual.",
                caracteristicas: [
                    "Diseño modular: 3 tamaños (S, M, L)",
                    "Sensores capacitivos en zona lumbar y dorsal",
                    "Material: PLA con refuerzos de TPU flexible",
                    "Ajuste mediante velcro de alta resistencia"
                ],
                tecnologia: "Tinkercad + Fusion 360",
                imagen: propuestaM,
                innovacion: "Primer prototipo que combina ergonomía adaptativa con sensorización distribuida."
            },
            {
                id: 2,
                estudiante: "David Carhuaz Vicaña",
                rol: "Electrónica y Sensores",
                propuesta: "Sistema de Monitoreo con Arduino Nano",
                descripcion: "Circuito compacto basado en Arduino Nano 33 IoT con acelerómetro MPU6050 y sensor de presión FSR para detección de postura en tiempo real.",
                caracteristicas: [
                    "Procesamiento de datos a 50Hz",
                    "Alertas vibratorias con mini motor",
                    "Batería recargable LiPo 3.7V (6h autonomía)",
                    "Comunicación Bluetooth Low Energy (BLE)"
                ],
                tecnologia: "Arduino IDE + C++",
                imagen: propuestaC,
                innovacion: "Algoritmo de Machine Learning embebido para aprender el patrón postural personal del usuario."
            },
            {
                id: 3,
                estudiante: "Mayela Ticona Mamani",
                rol: "Interfaz de Usuario",
                propuesta: "App Web Progresiva con Dashboard Analítico",
                descripcion: "Aplicación web responsiva que recibe datos del Arduino vía Bluetooth Web API y presenta visualizaciones interactivas del comportamiento postural.",
                caracteristicas: [
                    "Gráficos de tiempo de uso por sesión",
                    "Heatmap de puntos de presión corporal",
                    "Sistema de logros y racha de días saludables",
                    "Exportación de reportes PDF para médicos"
                ],
                tecnologia: "React + Chart.js + Firebase",
                imagen: propuestaT,
                innovacion: "Primera app que gamifica la corrección postural con mecánicas de videojuegos."
            },
            {
                id: 4,
                estudiante: "Betuel J. Aronés Silva",
                rol: "Integración y Prototipado",
                propuesta: "Ensamblaje Híbrido: Impresión 3D + Corte Láser",
                descripcion: "Combinación de técnicas de manufactura digital: estructura base en PLA (impresión 3D) y paneles de soporte en acrílico (corte láser) para reducir peso y costo.",
                caracteristicas: [
                    "Peso total: <300g (50% menos que alternativas)",
                    "Ensamblaje sin herramientas (snap-fit)",
                    "Paneles intercambiables personalizables",
                    "Diseño plegable para transporte"
                ],
                tecnologia: "Ultimaker Cura + LaserCut",
                imagen: propuestaA,
                innovacion: "Primer prototipo que aprovecha las ventajas de ambas tecnologías de fabricación digital."
            },
            {
                id: 5,
                estudiante: "Milagros Ramos Chamorro",
                rol: "Documentación y UX",
                propuesta: "Plataforma de Educación Postural Interactiva",
                descripcion: "Extensión de la app principal con módulo educativo que enseña anatomía de la columna vertebral mediante modelos 3D interactivos y ejercicios guiados.",
                caracteristicas: [
                    "Biblioteca de 15 ejercicios de estiramiento",
                    "Videos tutoriales de 2-3 minutos",
                    "Recordatorios inteligentes basados en patrones de uso",
                    "Comunidad para compartir progreso"
                ],
                tecnologia: "React + Three.js + Markdown",
                imagen: propuestaR,
                innovacion: "Enfoque educativo preventivo en lugar de solo correctivo."
            }
        ],

        stackTecnologico: {
            hardware: [
                "Arduino Nano 33 IoT",
                "Sensor MPU6050 (Acelerómetro + Giroscopio)",
                "Sensores FSR (Force Sensitive Resistor)",
                "Motor Vibrador de Disco",
                "Batería LiPo 3.7V 500mAh"
            ],
            software: [
                "React 18 (Frontend)",
                "Firebase Realtime Database",
                "Chart.js / Recharts",
                "Bluetooth Web API",
                "Progressive Web App (PWA)"
            ],
            fabricacion: [
                "Tinkercad (Diseño conceptual)",
                "Fusion 360 (Análisis FEA)",
                "Ultimaker Cura (Slicing)",
                "Impresora 3D FDM (PLA/TPU)",
                "Cortadora Láser CO2 (Acrílico 3mm)"
            ]
        }
    };

    return (
        <div className="semana04-page">
            {/* HERO */}
            <section className="hero-main tech-hero">
                <div className="hero-layer"></div>
                <div className="hero-content container">
                    <span className="badge">{proyectoData.desafio}</span>
                    <h1 className="weekly-title">
                        {proyectoData.titulo}
                        <span className="highlight-text"> Pro</span>
                    </h1>
                    <p className="lead">{proyectoData.subtitulo}</p>
                    
                    <div className="tech-tags">
                        <span className="tech-tag">Arduino IoT</span>
                        <span className="tech-tag">Tinkercad 3D</span>
                        <span className="tech-tag">React PWA</span>
                        <span className="tech-tag">Fusion 360</span>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* INTRODUCCIÓN AL PROYECTO */}
                <section className="intro-proyecto">
                    <div className="section-header centered">
                        <span className="section-number">Contexto del Proyecto</span>
                        <h2>Introducción <em className="brand-text">Técnica</em></h2>
                    </div>

                    <div className="intro-grid">
                        <div className="intro-card card">
                            <h3>El Problema</h3>
                            <p>{proyectoData.introduccion.problema}</p>
                        </div>
                        <div className="intro-card card">
                            <h3>Nuestra Visión</h3>
                            <p>{proyectoData.introduccion.vision}</p>
                        </div>
                        <div className="intro-card card">
                            <h3>Alcance</h3>
                            <p>{proyectoData.introduccion.alcance}</p>
                        </div>
                    </div>
                </section>

                {/* TECNOLOGÍAS PRINCIPALES */}
                <section className="tecnologias-section">
                    <div className="section-header centered">
                        <span className="section-number">Stack Tecnológico</span>
                        <h2>Tecnologías <em className="brand-text">Implementadas</em></h2>
                        <p className="section-subtitle">Herramientas y plataformas utilizadas en el desarrollo</p>
                    </div>

                    <div className="tecnologias-grid">
                        {proyectoData.tecnologias.map((tech, index) => (
                            <div key={index} className="tech-card card">
                                <div className="tech-header">
                                    <div className="tech-logo">
                                        <img src={tech.imagen} alt={tech.nombre} />
                                    </div>
                                    <div className="tech-info">
                                        <span className="tech-categoria">{tech.categoria}</span>
                                        <h3>{tech.nombre}</h3>
                                    </div>
                                </div>

                                <p className="tech-descripcion">{tech.descripcion}</p>

                                <div className="tech-uso">
                                    <h4>Aplicación en el Proyecto</h4>
                                    <p>{tech.uso}</p>
                                </div>

                                <div className="tech-ventajas">
                                    <h4>Ventajas Clave</h4>
                                    <ul>
                                        {tech.ventajas.map((ventaja, idx) => (
                                            <li key={idx}>{ventaja}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PROPUESTAS DEL EQUIPO */}
                <section className="propuestas-section">
                    <div className="section-header centered">
                        <span className="section-number">Aportes Individuales</span>
                        <h2>Propuestas del <em className="brand-text">Equipo</em></h2>
                        <p className="section-subtitle">Cada miembro contribuyó con una visión única al proyecto</p>
                    </div>

                    <div className="propuestas-list">
                        {proyectoData.propuestasEquipo.map((propuesta) => (
                            <div key={propuesta.id} className="propuesta-card card">
                                <div className="propuesta-header">
                                    <div className="propuesta-numero">{propuesta.id}</div>
                                    <div className="propuesta-autor">
                                        <h3>{propuesta.estudiante}</h3>
                                        <span className="propuesta-rol">{propuesta.rol}</span>
                                    </div>
                                </div>

                                <div className="propuesta-content">
                                    <div className="propuesta-image">
                                        <img src={propuesta.imagen} alt={propuesta.propuesta} />
                                        <div className="propuesta-tech-badge">{propuesta.tecnologia}</div>
                                    </div>

                                    <div className="propuesta-details">
                                        <h4>{propuesta.propuesta}</h4>
                                        <p className="propuesta-descripcion">{propuesta.descripcion}</p>

                                        <div className="caracteristicas">
                                            <h5>Características Técnicas</h5>
                                            <ul>
                                                {propuesta.caracteristicas.map((car, idx) => (
                                                    <li key={idx}>{car}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="innovacion-badge">
                                            <strong>Innovación:</strong> {propuesta.innovacion}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* STACK TÉCNICO DETALLADO */}
                <section className="stack-section">
                    <div className="section-header centered">
                        <span className="section-number">Arquitectura Técnica</span>
                        <h2>Componentes del <em className="brand-text">Sistema</em></h2>
                    </div>

                    <div className="stack-grid">
                        <div className="stack-category card">
                            <h3>Hardware & Sensores</h3>
                            <ul className="stack-list">
                                {proyectoData.stackTecnologico.hardware.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="stack-category card">
                            <h3>Software & Frontend</h3>
                            <ul className="stack-list">
                                {proyectoData.stackTecnologico.software.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="stack-category card">
                            <h3>Fabricación Digital</h3>
                            <ul className="stack-list">
                                {proyectoData.stackTecnologico.fabricacion.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}