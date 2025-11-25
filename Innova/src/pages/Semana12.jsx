import React from 'react';
import '../css/semana12.css';

// Importar las imágenes correctamente
import semana121 from '../img/semana121.jpg';
import semana122 from '../img/semana122.jpg';
import semana123 from '../img/semana123.jpg';
import semana124 from '../img/semana124.jpg';
import semana125 from '../img/semana125.jpg';
import semana126 from '../img/semana126.jpg';
import semana127 from '../img/semana127.jpg';
import semana128 from '../img/semana128.jpg';

export default function Semana12() {
    // Arrays con las imágenes importadas
    const modelingImages = [
        { src: semana121, alt: 'Modelado Tinkercad Vista 1' },
        { src: semana122, alt: 'Modelado Tinkercad Vista 2' },
        { src: semana123, alt: 'Modelado Tinkercad Vista 3' },
        { src: semana124, alt: 'Modelado Tinkercad Vista 4' },
    ];

    const printImages = [
        { src: semana125, alt: 'Previsualización Slicer Vista 1' },
        { src: semana126, alt: 'Previsualización Slicer Vista 2' },
        { src: semana127, alt: 'Previsualización Slicer Vista 3' },
        { src: semana128, alt: 'Previsualización Slicer Vista 4' },
    ];

    // Datos para la tabla de especificaciones dimensionales
    const dimensionalSpecs = [
        { metric: 'Dimensión Principal (L x A x H)', value: '150.0 x 80.0 x 30.0 mm', tolerance: '±0.25 mm' },
        { metric: 'Tolerancia Crítica', value: '±0.25 mm', tolerance: 'N/A' },
        { metric: 'Espesor de Pared', value: '1.2 mm (3 perímetros)', tolerance: '±0.1 mm' },
        { metric: 'Volumen Total', value: '360 cm³', tolerance: '±2%' },
        { metric: 'Peso Estimado (PLA)', value: '65 gramos', tolerance: '±3 g' },
    ];

    // Datos para la tabla de parámetros de impresión
    const printParameters = [
        { parameter: 'Velocidad de Impresión', value: '50 mm/s' },
        { parameter: 'Temperatura de Cama', value: '60°C' },
        { parameter: 'Flujo (Flow)', value: '100%' },
        { parameter: 'Retracción (Distance)', value: '6 mm' },
        { parameter: 'Ventilador de Capa', value: '100% (después de la 3ª capa)' },
        { parameter: 'Adhesión (Brim)', value: 'Sí, 5 líneas' },
    ];

    return (
        <div className="weekly-report-page">
            {/* HERO - Título de la Semana */}
            <section className="hero-main weekly-hero">
                <div className="hero-layer"></div>
                <div className="hero-content container">
                    <span className="badge">Semana 12 | Ejecución</span>
                    <h1 className="weekly-title">
                        Modelado, Laminado y Control <span className="highlight-text">de Calidad 3D</span>
                    </h1>
                    <p className="lead">
                        Documentación técnica completa del modelo CAD, configuración de laminado (Slicer) y especificaciones dimensionales para la manufactura aditiva.
                    </p>
                </div>
            </section>

            <div className="container">
                {/* INTRODUCCIÓN Y JUSTIFICACIÓN DE DISEÑO */}
                <section className="intro-section design-justification">
                    <div className="section-header centered">
                        <span className="section-number">Análisis Detallado</span>
                        <h2>Justificación de las Decisiones de <em className="brand-text">Diseño CAD</em></h2>
                        <p className="section-subtitle">
                            Explicación de las elecciones geométricas, estructurales y funcionales del modelo digital.
                        </p>
                    </div>
                    
                    <div className="justification-cards-grid">
                        <div className="card justification-card">
                            <div className="card-icon">🔧</div>
                            <h3>Optimización Estructural</h3>
                            <p>
                                Se aplicaron radios de esquina (fillets) de 5mm en todas las aristas críticas para 
                                distribuir las tensiones mecánicas y mejorar la resistencia a la fractura, crucial 
                                para el uso final del producto.
                            </p>
                        </div>
                        <div className="card justification-card">
                            <div className="card-icon">🖨️</div>
                            <h3>Viabilidad de Impresión</h3>
                            <p>
                                La pieza fue diseñada en dos componentes modulares para evitar la impresión de 
                                voladizos (overhangs) complejos y reducir la necesidad de soportes, minimizando 
                                el post-procesado.
                            </p>
                        </div>
                        <div className="card justification-card">
                            <div className="card-icon">👤</div>
                            <h3>Consideraciones Ergonómicas</h3>
                            <p>
                                Las superficies de contacto con el usuario fueron modeladas con una curvatura suave, 
                                buscando un índice de confort superior al 85% basado en los principios de diseño universal.
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* SHOWCASE DEL MODELADO (TINKERCAD) */}
                <section className="modeling-showcase">
                    <div className="section-header">
                        <span className="section-number">Modelado 3D</span>
                        <h2>Modelado CAD en <em className="brand-text">Tinkercad</em></h2>
                        <p className="section-subtitle">
                            Representación visual de la geometría 3D desde diferentes perspectivas de diseño.
                        </p>
                    </div>
                    <div className="image-grid grid-4-cols">
                        {modelingImages.map((image, index) => (
                            <div key={`model-${index}`} className="image-card card">
                                <div className="image-wrapper">
                                    <img src={image.src} alt={image.alt} loading="lazy" />
                                </div>
                                <p className="image-caption">Vista CAD {index + 1}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ESPECIFICACIONES DIMENSIONALES */}
                <section className="dimensional-specs-section">
                    <div className="section-header">
                        <span className="section-number">Datos de Ingeniería</span>
                        <h2>Tabla de <em className="brand-text">Medidas Técnicas</em></h2>
                        <p className="section-subtitle">
                            Métricas dimensionales críticas y tolerancias asociadas al modelo.
                        </p>
                    </div>
                    <div className="technical-specs card">
                        <table className="specs-table">
                            <thead>
                                <tr>
                                    <th>Métrica Dimensional</th>
                                    <th>Valor</th>
                                    <th>Tolerancia</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dimensionalSpecs.map((spec, index) => (
                                    <tr key={index}>
                                        <td className="metric-name">{spec.metric}</td>
                                        <td className="metric-value">{spec.value}</td>
                                        <td className="tolerance-value">{spec.tolerance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* PREVISUALIZACIÓN DE IMPRESIÓN Y LAMINADO */}
                <section className="print-specs-section">
                    <div className="section-header">
                        <span className="section-number">Slicing</span>
                        <h2>Laminado (Slicing) y <em className="brand-text">Parámetros de Manufactura</em></h2>
                        <p className="section-subtitle">
                            Visualización de la simulación de impresión y la configuración detallada del laminador.
                        </p>
                    </div>
                    
                    <div className="specs-content-grid">
                        {/* IMÁGENES DE PREVISUALIZACIÓN */}
                        <div className="print-preview">
                            <h3>Simulación de Ruta G-Code</h3>
                            <div className="image-grid grid-4-cols">
                                {printImages.map((image, index) => (
                                    <div key={`print-${index}`} className="image-card card">
                                        <div className="image-wrapper">
                                            <img src={image.src} alt={image.alt} loading="lazy" />
                                        </div>
                                        <p className="image-caption">Vista {index + 1}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="preview-note card">
                                <span className="note-icon">💡</span>
                                <p>
                                    Se optimizó la orientación del modelo (45° en el eje X) para aprovechar 
                                    la anisotropía del material y mejorar la resistencia en el eje Z.
                                </p>
                            </div>
                        </div>

                        {/* TABLA DE PARÁMETROS AVANZADOS */}
                        <div className="advanced-specs">
                            <h3>Parámetros Avanzados de Laminado</h3>
                            <div className="card">
                                <table className="specs-table advanced-table">
                                    <thead>
                                        <tr>
                                            <th>Parámetro de Control</th>
                                            <th>Valor Seleccionado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {printParameters.map((param, index) => (
                                            <tr key={index}>
                                                <td className="param-name">{param.parameter}</td>
                                                <td className="param-value">{param.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="tool-box card">
                                <h4>Herramientas Usadas</h4>
                                <ul className="tool-list">
                                    <li>
                                        <span className="tool-icon">🖥️</span>
                                        <strong>Modelado:</strong> Tinkercad
                                    </li>
                                    <li>
                                        <span className="tool-icon">⚙️</span>
                                        <strong>Laminado:</strong> Cura 5.x
                                    </li>
                                    <li>
                                        <span className="tool-icon">🧵</span>
                                        <strong>Material:</strong> Filamento PLA
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}